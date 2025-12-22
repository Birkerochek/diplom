"use client";

import { useCallback, useState } from "react";
import { useSession } from "next-auth/react";

import { EventStatus, RegistrationStatus } from "../../../../../app/generated/prisma";
import { useCancelVolunteerApplication, useFetchEvent } from "@shared/api";
import { useVolunteerRegistration } from "@pages/VolunteerPage/Events/model";
import { useModalState } from "@shared/lib";

type UseVolunteerEventDetailsPageParams = {
  eventId: string;
};

export const useVolunteerEventDetailsPage = ({ eventId }: UseVolunteerEventDetailsPageParams) => {
  const { data: session } = useSession();
  const {
    data: event,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useFetchEvent(eventId);
  const { register, isEventProcessing } = useVolunteerRegistration();
  const cancelMutation = useCancelVolunteerApplication({ invalidateEventId: eventId });

  const [motivationLetter, setMotivationLetter] = useState("");
  const registrationModal = useModalState<void>();

  const userId = session?.user?.id;
  const registration = event?.volunteers.find((item) => item.volunteer.id === userId);

  const isRegistrationOpen =
    event &&
    (event.status === EventStatus.active || event.status === EventStatus.published);

  const maxParticipants = event?.capacity.maxParticipants ?? null;
  const currentParticipants = event?.capacity.currentParticipants ?? 0;
  const availableSeats =
    maxParticipants !== null ? Math.max(maxParticipants - currentParticipants, 0) : null;
  const isFull = typeof availableSeats === "number" ? availableSeats <= 0 : false;

  const isRegistering = isEventProcessing(eventId);
  const isCancelling = cancelMutation.isPending;

  const canRegister =
    isRegistrationOpen &&
    !isFull &&
    (!registration ||
      registration.status === RegistrationStatus.cancelled ||
      registration.status === RegistrationStatus.rejected);

  const canCancel =
    Boolean(registration) &&
    (registration?.status === RegistrationStatus.pending ||
      registration?.status === RegistrationStatus.approved);

  const handleRegister = useCallback(async () => {
    const trimmedLetter = motivationLetter.trim();

    try {
      await register(eventId, trimmedLetter || undefined);
      registrationModal.close();
      setMotivationLetter("");
    } catch (error) {
      console.error("Volunteer event register error", error);
    }
  }, [eventId, motivationLetter, register, registrationModal]);

  const handleCancel = useCallback(async () => {
    if (!registration) {
      return;
    }

    try {
      await cancelMutation.mutateAsync(registration.id);
    } catch (error) {
      console.error("Volunteer event cancel error", error);
    }
  }, [cancelMutation, registration]);

  return {
    event,
    isLoading,
    isError,
    refetch,
    isFetching,
    registration,
    motivationLetter,
    setMotivationLetter,
    registrationModal,
    isRegistering,
    isCancelling,
    canRegister,
    canCancel,
    isRegistrationOpen,
    isFull,
    availableSeats,
    onRegister: handleRegister,
    onCancel: handleCancel,
  };
};
