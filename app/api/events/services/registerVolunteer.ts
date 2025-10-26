import { EventStatus, RegistrationStatus } from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { z } from "zod";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type RegisterVolunteerInput = {
  volunteerId: string;
  eventId: string;
  payload: unknown;
};

type RegisterVolunteerResult =
  | { status: 200 | 201; body: { success: true } }
  | { status: 400 | 403 | 404 | 409; body: { message: string } };

const registerSchema = z
  .object({
    motivationLetter: z
      .string()
      .trim()
      .max(1000, "Сопроводительное письмо слишком длинное")
      .optional(),
  })
  .optional()
  .transform((value) => value ?? {});

const ALLOWED_STATUSES: EventStatus[] = [EventStatus.published, EventStatus.active];

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const registerVolunteer = async ({
  volunteerId,
  eventId,
  payload,
}: RegisterVolunteerInput) => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: {
      id: true,
      status: true,
      maxParticipants: true,
    },
  });

  if (!event) {
    return { status: 404, body: { message: "Мероприятие не найдено" } } satisfies RegisterVolunteerResult;
  }

  if (!ALLOWED_STATUSES.includes(event.status)) {
    return {
      status: 403,
      body: { message: "Регистрация на это мероприятие недоступна" },
    } satisfies RegisterVolunteerResult;
  }

  const parsed = registerSchema.safeParse(payload);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
    return { status: 400, body: { message } } satisfies RegisterVolunteerResult;
  }

  const activeSeats = event.maxParticipants
    ? await prisma.eventRegistration.count({
        where: {
          eventId,
          status: {
            in: [
              RegistrationStatus.pending,
              RegistrationStatus.approved,
              RegistrationStatus.completed,
            ],
          },
        },
      })
    : 0;

  if (event.maxParticipants && activeSeats >= event.maxParticipants) {
    return {
      status: 409,
      body: { message: "Достигнут лимит участников" },
    } satisfies RegisterVolunteerResult;
  }

  const existing = await prisma.eventRegistration.findUnique({
    where: {
      eventId_volunteerId: {
        eventId,
        volunteerId,
      },
    },
    select: { status: true },
  });

  if (existing && existing.status !== RegistrationStatus.cancelled) {
    return {
      status: 409,
      body: { message: "Вы уже записаны на это мероприятие" },
    } satisfies RegisterVolunteerResult;
  }

  const motivationLetter = parsed.data.motivationLetter?.trim() || null;

  if (existing) {
    await prisma.eventRegistration.update({
      where: {
        eventId_volunteerId: {
          eventId,
          volunteerId,
        },
      },
      data: {
        status: RegistrationStatus.pending,
        motivationLetter,
        registeredAt: new Date(),
      },
    });

    return { status: 200, body: { success: true } } satisfies RegisterVolunteerResult;
  }

  await prisma.eventRegistration.create({
    data: {
      eventId,
      volunteerId,
      status: RegistrationStatus.pending,
      motivationLetter,
    },
  });

  return { status: 201, body: { success: true } } satisfies RegisterVolunteerResult;
};
