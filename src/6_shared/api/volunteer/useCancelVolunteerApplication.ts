import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/constants";
import { cancelVolunteerApplicationRequest } from "./cancelApplication";

export const useCancelVolunteerApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.VOLUNTEER_APPLICATIONS, "cancel"],
    mutationFn: (registrationId: string) =>
      cancelVolunteerApplicationRequest(registrationId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VOLUNTEER_APPLICATIONS],
      });
    },
  });
};
