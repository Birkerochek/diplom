import { api } from "@shared/api/axios";

export const cancelVolunteerApplicationRequest = async (registrationId: string) => {
  await api.patch(`/api/volunteer/applications/${registrationId}`);

  return { success: true };
};
