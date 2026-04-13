import { RegistrationStatus, Role } from "../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

export type AdminVolunteerListResponse = {
  data: Array<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    isActive: boolean;
    createdAt: string;
    stats: {
      totalHours: number;
      completedEvents: number;
      applications: number;
    };
  }>;
  meta: {
    total: number;
    limit: number;
    search: string | null;
  };
  summary: {
    totalVolunteers: number;
    activeVolunteers: number;
    blockedVolunteers: number;
    totalHours: number;
  };
};

const parseLimit = (searchParams: URLSearchParams) => {
  const raw = Number(searchParams.get("limit"));

  if (!Number.isFinite(raw) || raw <= 0) {
    return DEFAULT_LIMIT;
  }

  return Math.min(Math.floor(raw), MAX_LIMIT);
};

export const getAdminVolunteers = async (
  url: string
): Promise<AdminVolunteerListResponse> => {
  const searchParams = new URL(url).searchParams;
  const search = searchParams.get("search")?.trim() ?? "";
  const limit = parseLimit(searchParams);

  const where = {
    role: Role.volunteer,
    ...(search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" as const } },
            { email: { contains: search, mode: "insensitive" as const } },
            { phone: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [volunteers, total, allSummary] = await Promise.all([
    prisma.user.findMany({
      where,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
        createdAt: true,
        volunteerHours: {
          select: { hours: true },
        },
        registrations: {
          select: { id: true, status: true },
        },
      },
    }),
    prisma.user.count({ where }),
    prisma.user.findMany({
      where: { role: Role.volunteer },
      select: {
        id: true,
        isActive: true,
        volunteerHours: {
          select: { hours: true },
        },
      },
    }),
  ]);

  return {
    data: volunteers.map((volunteer) => ({
      id: volunteer.id,
      name: volunteer.name,
      email: volunteer.email,
      phone: volunteer.phone,
      isActive: volunteer.isActive,
      createdAt: volunteer.createdAt.toISOString(),
      stats: {
        totalHours: volunteer.volunteerHours.reduce((sum, item) => sum + item.hours, 0),
        completedEvents: volunteer.registrations.filter(
          (registration) => registration.status === RegistrationStatus.completed
        ).length,
        applications: volunteer.registrations.length,
      },
    })),
    meta: {
      total,
      limit,
      search: search || null,
    },
    summary: {
      totalVolunteers: allSummary.length,
      activeVolunteers: allSummary.filter((volunteer) => volunteer.isActive).length,
      blockedVolunteers: allSummary.filter((volunteer) => !volunteer.isActive).length,
      totalHours: allSummary.reduce(
        (sum, volunteer) =>
          sum + volunteer.volunteerHours.reduce((hoursSum, item) => hoursSum + item.hours, 0),
        0
      ),
    },
  };
};
