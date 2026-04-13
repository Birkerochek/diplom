import { api } from "@shared/api/axios";

export type FetchAdminVolunteersParams = {
  search?: string;
  limit?: number;
};

export type AdminVolunteerListItem = {
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
};

export type FetchAdminVolunteersResponse = {
  data: AdminVolunteerListItem[];
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

export const fetchAdminVolunteers = async (
  params: FetchAdminVolunteersParams = {}
): Promise<FetchAdminVolunteersResponse> => {
  const { data } = await api.get<FetchAdminVolunteersResponse>("/api/admin/volunteers", {
    params,
  });

  return data;
};
