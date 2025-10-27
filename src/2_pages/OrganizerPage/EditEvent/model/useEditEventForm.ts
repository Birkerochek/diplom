"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  eventDefaultValues,
  eventFormSchema,
  mapEventFormToRequest,
  type EventFormInput,
  type EventFormOutput,
} from "@shared/zod";
import { useFetchEvent, useUpdateEvent } from "@shared/api";
import type { FetchEventResponse } from "@shared/api/event/fetchEvent";

import { CATEGORY_OPTIONS } from "../../CreateEvent/model/categories";

type UseEditEventFormParams = {
  eventId: string;
};

const buildFormValues = (event: FetchEventResponse): EventFormInput => {
  const { schedule, location, requirements, skillsNeeded } = event;

  const eventDate = new Date(schedule.eventDate);
  const startTimeIso = new Date(schedule.startTime).toISOString();
  const endTimeIso = new Date(schedule.endTime).toISOString();

  const knownCategory = CATEGORY_OPTIONS.find(
    (option) =>
      option.value !== "other" &&
      (option.value === event.activityType || option.label === event.activityType)
  );

  const activityType = knownCategory ? knownCategory.value : "other";
  const customActivityType = knownCategory ? "" : event.activityType;

  return {
    title: event.title ?? "",
    description: event.description ?? "",
    activityType,
    customActivityType,
    eventDate,
    startTime: startTimeIso.slice(11, 16),
    endTime: endTimeIso.slice(11, 16),
    location: location.name ?? "",
    address: location.address ?? "",
    maxParticipants: event.capacity.maxParticipants ?? 1,
    requirements: requirements ?? "",
    skills: skillsNeeded.join(", "),
  };
};

export const useEditEventForm = ({ eventId }: UseEditEventFormParams) => {
  const router = useRouter();
  const eventQuery = useFetchEvent(eventId);

  const form = useForm<EventFormInput>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
  });

  const { watch, reset, resetField, handleSubmit, formState } = form;

  const activityType = watch("activityType");
  const isOtherActivity = useMemo(
    () => activityType === "other",
    [activityType]
  );

  useEffect(() => {
    if (!isOtherActivity) {
      resetField("customActivityType", { defaultValue: "" });
    }
  }, [isOtherActivity, resetField]);

  useEffect(() => {
    if (!eventQuery.data) {
      return;
    }

    const values = buildFormValues(eventQuery.data);
    reset(values);
  }, [eventQuery.data, reset]);

  const updateMutation = useUpdateEvent(eventId);

  const submit = useCallback(
    async (raw: EventFormInput) => {
      const values: EventFormOutput = eventFormSchema.parse(raw);

      try {
        const payload = mapEventFormToRequest(values);
        const result = await updateMutation.mutateAsync(payload);

        if (!result.success) {
          throw new Error(result.message ?? "Не удалось изменить мероприятие");
        }

        toast.success("Мероприятие успешно изменено");
        router.push(`/organizer/events/${eventId}`);
      } catch (error) {
        console.error("Update event error", error);

        if (isAxiosError(error)) {
          const message =
            error.response?.data?.message ?? "Не удалось изменить мероприятие";
          toast.error(message);
          return;
        }

        toast.error(
          error instanceof Error
            ? error.message
            : "Не удалось изменить мероприятие"
        );
      }
    },
    [eventId, router, updateMutation]
  );

  const handleFormSubmit = handleSubmit(submit);

  return {
    form,
    handleFormSubmit,
    isOtherActivity,
    isSubmitting: formState.isSubmitting || updateMutation.isPending,
    isLoadingInitialData: eventQuery.isLoading && !eventQuery.data,
    eventQuery,
  } as const;
};
