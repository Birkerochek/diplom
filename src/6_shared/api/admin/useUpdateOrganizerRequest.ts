import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import {
  updateOrganizerRequest,
  type UpdateOrganizerRequestPayload,
} from "./updateOrganizerRequest";

export const useUpdateOrganizerRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADMIN_ORGANIZER_REQUESTS, "update"],
    mutationFn: ({ requestId, payload }: { requestId: string; payload: UpdateOrganizerRequestPayload }) =>
      updateOrganizerRequest(requestId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_ORGANIZER_REQUESTS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_VOLUNTEERS] });
    },
  });
};
