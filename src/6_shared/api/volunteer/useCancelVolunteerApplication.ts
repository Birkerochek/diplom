import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/constants";
import { cancelVolunteerApplicationRequest } from "./cancelApplication";

type UseCancelVolunteerApplicationOptions = {
  invalidateEventId?: string;
};

export const useCancelVolunteerApplication = (options?: UseCancelVolunteerApplicationOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.VOLUNTEER_APPLICATIONS, "cancel"],
    mutationFn: (registrationId: string) =>
      cancelVolunteerApplicationRequest(registrationId),
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VOLUNTEER_APPLICATIONS],
      });

      if (options?.invalidateEventId) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.EVENT, options.invalidateEventId],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.EVENTS],
        });
      }
    },
  });
};
