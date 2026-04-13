import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import {
  updateAdminVolunteer,
  type UpdateAdminVolunteerPayload,
} from "./updateVolunteer";

export const useUpdateAdminVolunteer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADMIN_VOLUNTEERS, "update"],
    mutationFn: ({ volunteerId, payload }: { volunteerId: string; payload: UpdateAdminVolunteerPayload }) =>
      updateAdminVolunteer(volunteerId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_VOLUNTEERS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_DASHBOARD] });
    },
  });
};
