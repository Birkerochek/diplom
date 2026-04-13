import { api } from "@shared/api/axios";

export type OrganizerRequestStatus = "pending" | "approved" | "rejected";

export type FetchAdminOrganizerRequestsParams = {
  search?: string;
  limit?: number;
  status?: OrganizerRequestStatus;
};

export type AdminOrganizerRequestItem = {
  id: string;
  status: OrganizerRequestStatus;
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
};

export type FetchAdminOrganizerRequestsResponse = {
  data: AdminOrganizerRequestItem[];
  meta: {
    total: number;
    limit: number;
    search: string | null;
    status: OrganizerRequestStatus | null;
  };
  summary: {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  };
};

export const fetchAdminOrganizerRequests = async (
  params: FetchAdminOrganizerRequestsParams = {}
): Promise<FetchAdminOrganizerRequestsResponse> => {
  const { data } = await api.get<FetchAdminOrganizerRequestsResponse>(
    "/api/admin/organizer-requests",
    {
      params,
    }
  );

  return data;
};
