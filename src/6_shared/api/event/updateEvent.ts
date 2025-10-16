import { api } from "@shared/api/axios";
import type { EventCreatePayload } from "@shared/zod";
import type { EventStatus } from "../../../../app/generated/prisma";

export type UpdateEventResponse = {
  success: boolean;
  data: {
    id: string;
  };
  message?: string;
};

export type EventUpdatePayload = Partial<EventCreatePayload> & {
  status?: EventStatus;
};

export const updateEvent = async (eventId: string, payload: EventUpdatePayload) => {
  const { data } = await api.patch<UpdateEventResponse>(`/api/events/${eventId}`, payload);

  return data;
};
