import { useMutation } from "@tanstack/react-query";
import { createEvent } from "./createEvent";
import { QUERY_KEYS } from "@shared/constants";
import type { EventCreatePayload } from "@shared/zod";

export const useCreateEvent = () =>
  useMutation({
    mutationKey: [QUERY_KEYS.EVENTS, "create"],
    mutationFn: (payload: EventCreatePayload) => createEvent(payload),
  });
