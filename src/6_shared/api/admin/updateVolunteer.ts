import { api } from "@shared/api/axios";

export type UpdateAdminVolunteerPayload = {
  isActive: boolean;
};

export type UpdateAdminVolunteerResponse = {
  success: boolean;
  data: {
    id: string;
    isActive: boolean;
  };
};

export const updateAdminVolunteer = async (
  volunteerId: string,
  payload: UpdateAdminVolunteerPayload
) => {
  const { data } = await api.patch<UpdateAdminVolunteerResponse>(
    `/api/admin/volunteers/${volunteerId}`,
    payload
  );

  return data;
};
