import { prisma } from "@shared/lib/prisma";

const DEFAULT_LIMIT = 30;
const MAX_LIMIT = 100;
const organizerRequestStatuses = ["pending", "approved", "rejected"] as const;

type OrganizerRequestStatus = (typeof organizerRequestStatuses)[number];

const parseLimit = (searchParams: URLSearchParams) => {
  const raw = Number(searchParams.get("limit"));

  if (!Number.isFinite(raw) || raw <= 0) {
    return DEFAULT_LIMIT;
  }

  return Math.min(Math.floor(raw), MAX_LIMIT);
};

const parseStatus = (searchParams: URLSearchParams): OrganizerRequestStatus | null => {
  const status = searchParams.get("status")?.trim();

  if (status && organizerRequestStatuses.includes(status as OrganizerRequestStatus)) {
    return status as OrganizerRequestStatus;
  }

  return null;
};

export type AdminOrganizerRequestsResponse = {
  data: Array<{
    id: string;
    status: "pending" | "approved" | "rejected";
    requestedAt: string;
    reviewedAt: string | null;
    rejectionReason: string | null;
    user: {
      id: string;
      name: string;
      email: string;
      phone: string | null;
      currentRole: "volunteer" | "organizer" | "admin";
      organizationName: string | null;
      createdAt: string;
      isActive: boolean;
      stats: {
        totalHours: number;
        completedEvents: number;
        applications: number;
        organizedEvents: number;
      };
    };
    reviewedBy: {
      id: string;
      name: string;
      email: string;
    } | null;
  }>;
  meta: {
    total: number;
    limit: number;
    search: string | null;
    status: "pending" | "approved" | "rejected" | null;
  };
  summary: {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  };
};

export const getAdminOrganizerRequests = async (
  url: string
): Promise<AdminOrganizerRequestsResponse> => {
  const searchParams = new URL(url).searchParams;
  const search = searchParams.get("search")?.trim() ?? "";
  const limit = parseLimit(searchParams);
  const status = parseStatus(searchParams);

  const where = {
    ...(status ? { status } : {}),
    ...(search
      ? {
          OR: [
            { user: { name: { contains: search, mode: "insensitive" as const } } },
            { user: { email: { contains: search, mode: "insensitive" as const } } },
            {
              user: {
                organizationName: { contains: search, mode: "insensitive" as const },
              },
            },
          ],
        }
      : {}),
  };

  const [requests, total, counts] = await Promise.all([
    prisma.organizerRoleRequest.findMany({
      where,
      take: limit,
      orderBy: [{ status: "asc" }, { requestedAt: "asc" }],
      include: {
        reviewedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            organizationName: true,
            createdAt: true,
            isActive: true,
            volunteerHours: {
              select: { hours: true },
            },
            registrations: {
              select: { id: true, status: true },
            },
            events: {
              select: { id: true },
            },
          },
        },
      },
    }),
    prisma.organizerRoleRequest.count({ where }),
    prisma.organizerRoleRequest.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
  ]);

  const summary = counts.reduce(
    (acc, item) => {
      acc.total += item._count._all;
      if (item.status === "pending") {
        acc.pending = item._count._all;
      }
      if (item.status === "approved") {
        acc.approved = item._count._all;
      }
      if (item.status === "rejected") {
        acc.rejected = item._count._all;
      }
      return acc;
    },
    {
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    }
  );

  return {
    data: requests.map((request) => ({
      id: request.id,
      status: request.status,
      requestedAt: request.requestedAt.toISOString(),
      reviewedAt: request.reviewedAt?.toISOString() ?? null,
      rejectionReason: request.rejectionReason,
      user: {
        id: request.user.id,
        name: request.user.name,
        email: request.user.email,
        phone: request.user.phone,
        currentRole: request.user.role,
        organizationName: request.user.organizationName,
        createdAt: request.user.createdAt.toISOString(),
        isActive: request.user.isActive,
        stats: {
          totalHours: request.user.volunteerHours.reduce((sum, item) => sum + item.hours, 0),
          completedEvents: request.user.registrations.filter(
            (registration) => registration.status === "completed"
          ).length,
          applications: request.user.registrations.length,
          organizedEvents: request.user.events.length,
        },
      },
      reviewedBy: request.reviewedBy,
    })),
    meta: {
      total,
      limit,
      search: search || null,
      status,
    },
    summary,
  };
};
