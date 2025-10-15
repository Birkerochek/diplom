"use client";

import { useCallback } from "react";
import { toast } from "react-toastify";
import { RegistrationStatus } from "../../../../../app/generated/prisma";
import { useUpdateRegistrationStatus } from "@shared/api";

type UseVolunteerActionsParams = {
  eventId: string;
};

export const useVolunteerActions = ({ eventId }: UseVolunteerActionsParams) => {
  const mutation = useUpdateRegistrationStatus(eventId);

  const approveVolunteer = useCallback(
    async (registrationId: string) => {
      try {
        await mutation.mutateAsync({
          registrationId,
          status: RegistrationStatus.approved,
        });
        toast.success("Заявка одобрена");
      } catch (error) {
        console.error("Approve volunteer error", error);
        toast.error("Не удалось одобрить заявку");
      }
    },
    [mutation]
  );

  const rejectVolunteer = useCallback(
    async (registrationId: string, rejectionReason?: string) => {
      try {
        await mutation.mutateAsync({
          registrationId,
          status: RegistrationStatus.rejected,
          rejectionReason,
        });
        toast.success("Заявка отклонена");
      } catch (error) {
        console.error("Reject volunteer error", error);
        toast.error("Не удалось отклонить заявку");
      }
    },
    [mutation]
  );

  return {
    approveVolunteer,
    rejectVolunteer,
    isProcessing: mutation.isPending,
  } as const;
};
