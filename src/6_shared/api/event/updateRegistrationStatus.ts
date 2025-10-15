import { api } from "@shared/api/axios";
import type { RegistrationStatus } from "../../../../app/generated/prisma";

export type UpdateRegistrationStatusPayload = {
  status: RegistrationStatus;
  rejectionReason?: string;
};

export type UpdateRegistrationStatusRequest = {
  eventId: string;
  registrationId: string;
} & UpdateRegistrationStatusPayload;

export type UpdateRegistrationStatusResponse = {
  success: true;
};

export const updateRegistrationStatus = async ({
  eventId,
  registrationId,
  status,
  rejectionReason,
}: UpdateRegistrationStatusRequest): Promise<UpdateRegistrationStatusResponse> => {
  const { data } = await api.patch<UpdateRegistrationStatusResponse>(
    `/api/events/${eventId}/registrations/${registrationId}`,
    {
      status,
      rejectionReason,
    }
  );

  return data;
};
