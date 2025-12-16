import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import type { EventCreatePayload } from "@shared/zod";
import { createEvent } from "./createEvent";

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.EVENTS, "create"],
    mutationFn: (payload: EventCreatePayload) => createEvent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENTS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ORGANIZER_DASHBOARD] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ORGANIZER_ACTIVITY] });
    },
  });
};
