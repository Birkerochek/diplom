import { z } from "zod";
import { resolveActivityTypeKey } from "@shared/constants";
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const isValidDateString = (value: string) => !Number.isNaN(Date.parse(value));

const combineDateAndTime = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours ?? 0,
      minutes ?? 0,
      0,
      0
    )
  );
}
export const eventFormSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Укажите название мероприятия"),
    description: z
      .string()
      .trim()
      .min(1, "Добавьте описание"),
    activityType: z
      .string()
      .trim()
      .min(1, "Выберите направление"),
    customActivityType: z
      .string()
      .trim()
      .optional(),
    eventDate: z
      .union([z.date(), z.undefined()])
      .transform((value) => value ?? undefined),
    startTime: z
      .string()
      .regex(timeRegex, "Используйте формат ЧЧ:ММ"),
    endTime: z
      .string()
      .regex(timeRegex, "Используйте формат ЧЧ:ММ"),
    location: z
      .string()
      .trim()
      .min(1, "Укажите место проведения"),
    address: z
      .string()
      .trim()
      .optional()
      .transform((value) => (value ? value : undefined)),
    maxParticipants: z.coerce
      .number()
      .refine((value) => !Number.isNaN(value), {
        message: "Укажите количество волонтёров",
      })
      .refine((value) => Number.isInteger(value), {
        message: "Количество должно быть целым числом",
      })
      .refine((value) => value > 0, {
        message: "Минимум 1 участник",
      }),
    requirements: z
      .string()
      .trim()
      .optional(),
    skills: z
      .string()
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.activityType === "other" && !data.customActivityType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["customActivityType"],
        message: "Укажите направление",
      });
    }

    if (!(data.eventDate instanceof Date)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["eventDate"],
        message: "Введите дату проведения",
      });
      return;
    }

    if (data.eventDate instanceof Date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(data.eventDate.getTime());
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["eventDate"],
          message: "Дата не может быть в прошлом",
        });
      }

      const start = combineDateAndTime(data.eventDate, data.startTime);
      const end = combineDateAndTime(data.eventDate, data.endTime);

      if (end <= start) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endTime"],
          message: "Время окончания должно быть позже начала",
        });
      }
    }
  });

export type EventFormValues = z.infer<typeof eventFormSchema>;
export type EventFormInput = z.input<typeof eventFormSchema>;
export type EventFormOutput = z.output<typeof eventFormSchema>;


export const mapEventFormToRequest = (values: EventFormOutput) => {
  const activityType =
    values.activityType === "other" && values.customActivityType
      ? values.customActivityType.trim()
      : (resolveActivityTypeKey(values.activityType) ?? values.activityType.trim());

  const eventDateLocal = values.eventDate;
  if (!(eventDateLocal instanceof Date)) {
    throw new Error("Некорректная дата проведения");
  }

  const eventDateUtc = new Date(
    Date.UTC(
      eventDateLocal.getFullYear(),
      eventDateLocal.getMonth(),
      eventDateLocal.getDate()
    )
  );

  const startDateTime = combineDateAndTime(eventDateLocal, values.startTime);
  const endDateTime = combineDateAndTime(eventDateLocal, values.endTime);

  const diffMs = endDateTime.getTime() - startDateTime.getTime();
  const diffHoursRaw = diffMs / (1000 * 60 * 60);
  const requiredHours = Math.max(1, Math.ceil(diffHoursRaw));

  return {
    title: values.title.trim(),
    description: values.description.trim(),
    activityType: activityType.trim(),
    eventDate: eventDateUtc.toISOString(),
    startDateTime: startDateTime.toISOString(),
    endDateTime: endDateTime.toISOString(),
    location: values.location.trim(),
    address: values.address?.trim() ?? null,
    requiredHours,
    maxParticipants: values.maxParticipants,
    requirements: values.requirements?.trim() || null,
    skillsNeeded: values.skills
      ? values.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
  } as const;
}
export const eventCreateSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Укажите название мероприятия"),
    description: z
      .string()
      .trim()
      .min(1, "Добавьте описание"),
    activityType: z
      .string()
      .trim()
      .min(1, "Выберите направление"),
    eventDate: z
      .string()
      .refine(isValidDateString, "Некорректная дата"),
    startDateTime: z
      .string()
      .refine(isValidDateString, "Некорректное время"),
    endDateTime: z
      .string()
      .refine(isValidDateString, "Некорректное время"),
    location: z
      .string()
      .trim()
      .min(1, "Укажите место проведения"),
    address: z
      .string()
      .trim()
      .nullable()
      .optional()
      .transform((value) => (value ? value : null)),
    maxParticipants: z
      .number()
      .refine((value) => Number.isFinite(value), {
        message: "Укажите количество волонтёров",
      })
      .int("Количество должно быть целым числом")
      .positive("Минимум 1 участник"),
    requirements: z
      .string()
      .trim()
      .nullable()
      .optional()
      .transform((value) => (value ? value : null)),
    skillsNeeded: z.array(z.string().min(1)).optional().default([]),
  })
  .superRefine((data, ctx) => {
    const start = new Date(data.startDateTime);
    const end = new Date(data.endDateTime);
    const eventDateValue = new Date(data.eventDate);
    if (Number.isNaN(eventDateValue.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["eventDate"],
        message: "Введите дату проведения",
      });
      return;
    }
    const now = new Date();
    const todayUtc = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate()
    );
    const eventDateUtc = Date.UTC(
      eventDateValue.getUTCFullYear(),
      eventDateValue.getUTCMonth(),
      eventDateValue.getUTCDate()
    );

    if (eventDateUtc < todayUtc) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["eventDate"],
        message: "Дата не может быть в прошлом",
      });
    }

    if (!(start < end)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDateTime"],
        message: "Время окончания должно быть позже начала",
      });
    }
  });

export type EventCreatePayload = z.infer<typeof eventCreateSchema>;