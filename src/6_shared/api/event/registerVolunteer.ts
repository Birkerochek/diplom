import { api } from "@shared/api/axios";

export type RegisterVolunteerPayload = {
  eventId: string;
  motivationLetter?: string;
};

export type RegisterVolunteerResponse = {
  success: true;
};

export const registerVolunteer = async ({
  eventId,
  motivationLetter,
}: RegisterVolunteerPayload): Promise<RegisterVolunteerResponse> => {
  const body =
    typeof motivationLetter === "string" && motivationLetter.trim().length > 0
      ? { motivationLetter: motivationLetter.trim() }
      : {};

  const { data } = await api.post<RegisterVolunteerResponse>(
    `/api/events/${eventId}/register`,
    body
  );

  return data;
};
