import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import { updateEvent, type EventUpdatePayload } from "./updateEvent";

export const useUpdateEvent = (eventId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.EVENT, eventId, "update"],
    mutationFn: (payload: EventUpdatePayload) => updateEvent(eventId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENT, eventId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENTS] });
    },
  });
};
