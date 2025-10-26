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
        toast.success("Волонтёр одобрен");
      } catch (error) {
        console.error("Approve volunteer error", error);
        toast.error("Не удалось одобрить волонтёра");
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
        toast.success("Волонтёр отклонён");
      } catch (error) {
        console.error("Reject volunteer error", error);
        toast.error("Не удалось отклонить волонтёра");
      }
    },
    [mutation]
  );

  const completeVolunteer = useCallback(
    async (registrationId: string) => {
      try {
        await mutation.mutateAsync({
          registrationId,
          status: RegistrationStatus.completed,
        });
        toast.success("Волонтёр отмечен как присутствовавший");
      } catch (error) {
        console.error("Complete volunteer error", error);
        toast.error("Не удалось отметить волонтёра");
      }
    },
    [mutation]
  );

  return {
    approveVolunteer,
    rejectVolunteer,
    completeVolunteer,
    isProcessing: mutation.isPending,
  } as const;
};
