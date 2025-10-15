import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import { updateRegistrationStatus } from "./updateRegistrationStatus";
import type { UpdateRegistrationStatusPayload } from "./updateRegistrationStatus";

export const useUpdateRegistrationStatus = (eventId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.EVENT, eventId, "registration", "update"],
    mutationFn: (payload: UpdateRegistrationStatusPayload & { registrationId: string }) =>
      updateRegistrationStatus({ eventId, ...payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENT, eventId] });
    },
  });
};
