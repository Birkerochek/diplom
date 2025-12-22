"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

import { useCreateEvent } from "@shared/api";
import {
  eventDefaultValues,
  eventFormSchema,
  mapEventFormToRequest,
  type EventFormInput,
  type EventFormOutput,
} from "@shared/zod";
import { useRouter } from "next/navigation";
import { PAGES } from "@shared/constants";

export const useCreateEventForm = () => {
  const router = useRouter()
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

  const createEventMutation = useCreateEvent();

  const submit = useCallback(
    async (raw: EventFormInput) => {
      const values: EventFormOutput = eventFormSchema.parse(raw);

      try {
        const payload = mapEventFormToRequest(values);
        const result = await createEventMutation.mutateAsync(payload);

        if (!result.success) {
          throw new Error(result.message ?? "Не удалось создать мероприятие");
        }

        toast.success("Мероприятие успешно создано. ");
        reset();
        router.push(PAGES.ORGANIZER_EVENTS)
      } catch (error) {
        console.error("Create event error", error);
        if (isAxiosError(error)) {
          const message =
            error.response?.data?.message ?? "Не удалось создать мероприятие";
          toast.error(message);
          return;
        }

        toast.error(
          error instanceof Error
            ? error.message
            : "Не удалось создать мероприятие"
        );
      }
    },
    [createEventMutation, reset, router]
  );

  const handleFormSubmit = handleSubmit(submit);

  return {
    form,
    handleFormSubmit,
    isOtherActivity,
    createEventMutation,
    isSubmitting: formState.isSubmitting || createEventMutation.isPending,
  } as const;
};
