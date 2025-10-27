import { useCallback } from "react";
import { toast } from "react-toastify";

import { useRegisterVolunteer } from "@shared/api";

type UseVolunteerRegistrationResult = {
  register: (eventId: string, motivationLetter?: string) => Promise<void>;
  isEventProcessing: (eventId: string) => boolean;
};

export const useVolunteerRegistration = (): UseVolunteerRegistrationResult => {
  const mutation = useRegisterVolunteer();

  const register = useCallback(
    async (eventId: string, motivationLetter?: string) => {
      try {
        await mutation.mutateAsync({ eventId, motivationLetter });
        toast.success('Заявка отправлена организатору и отобразится в разделе "Мои заявки".');
      } catch (error) {
        console.error("Volunteer registration error", error);
        const fallback = "Не удалось отправить заявку. Попробуйте позже.";
        const message =
          (error as { response?: { data?: { message?: string } } })?.response?.data?.message ??
          fallback;
        toast.error(message);
        throw error;
      }
    },
    [mutation]
  );

  const pendingEventId = mutation.variables?.eventId;

  const isEventProcessing = useCallback(
    (eventId: string) => mutation.isPending && pendingEventId === eventId,
    [mutation.isPending, pendingEventId]
  );

  return {
    register,
    isEventProcessing,
  };
};
