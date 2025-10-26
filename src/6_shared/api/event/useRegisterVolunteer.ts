import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/constants";

import {
  registerVolunteer,
  type RegisterVolunteerPayload,
  type RegisterVolunteerResponse,
} from "./registerVolunteer";

export const useRegisterVolunteer = () => {
  const queryClient = useQueryClient();

  return useMutation<RegisterVolunteerResponse, unknown, RegisterVolunteerPayload>({
    mutationKey: [QUERY_KEYS.EVENT, "register"],
    mutationFn: registerVolunteer,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENTS] });

      if (variables.eventId) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.EVENT, variables.eventId],
        });
      }
    },
  });
};
