import { api } from "@shared/api/axios";

export type DeleteEventResponse = {
  success: boolean;
};

export const deleteEvent = async (eventId: string) => {
  const { data } = await api.delete<DeleteEventResponse>(`/api/events/${eventId}`);

  return data;
};
