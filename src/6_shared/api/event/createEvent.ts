import { api } from "@shared/api/axios";
import type { EventCreatePayload } from "@shared/zod";

export type CreateEventResponse = {
  success: boolean;
  data: {
    id: string;
  };
  message?: string;
};

export const createEvent = async (payload: EventCreatePayload) => {
  const { data } = await api.post<CreateEventResponse>("/api/events", payload);

  return data;
};
