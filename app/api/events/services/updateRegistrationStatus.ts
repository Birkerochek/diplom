import {
  RegistrationStatus,
} from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { z } from "zod";

type UpdateRegistrationStatusInput = {
  organizerId: string;
  eventId: string;
  registrationId: string;
  payload: unknown;
};

type UpdateRegistrationStatusResult =
  | { status: 200; body: { success: true } }
  | { status: 400 | 403 | 404; body: { message: string } };

const allowedStatuses = [
  RegistrationStatus.approved,
  RegistrationStatus.rejected,
] satisfies RegistrationStatus[];

const updateSchema = z.object({
  status: z.nativeEnum(RegistrationStatus).refine(
    (value) => allowedStatuses.includes(value),
    "Статус можно изменить только на 'approved' или 'rejected'"
  ),
  rejectionReason: z
    .string()
    .trim()
    .max(1_000, "Причина слишком длинная")
    .optional(),
});

export const updateRegistrationStatus = async ({
  organizerId,
  eventId,
  registrationId,
  payload,
}: UpdateRegistrationStatusInput): Promise<UpdateRegistrationStatusResult> => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: { id: true, organizerId: true },
  });

  if (!event) {
    return { status: 404, body: { message: "Мероприятие не найдено" } };
  }

  if (event.organizerId !== organizerId) {
    return { status: 403, body: { message: "Недостаточно прав" } };
  }

  const registration = await prisma.eventRegistration.findUnique({
    where: { id: registrationId },
    select: {
      id: true,
      eventId: true,
      status: true,
    },
  });

  if (!registration || registration.eventId !== eventId) {
    return { status: 404, body: { message: "Заявка не найдена" } };
  }

  const parsed = updateSchema.safeParse(payload);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
    return { status: 400, body: { message } };
  }

  const { status, rejectionReason } = parsed.data;

  if (registration.status === status) {
    return { status: 200, body: { success: true } };
  }

  await prisma.$transaction(async (tx) => {
    await tx.eventRegistration.update({
      where: { id: registrationId },
      data: {
        status,
        rejectionReason: status === RegistrationStatus.rejected ? rejectionReason ?? null : null,
        reviewedById: organizerId,
        reviewedAt: new Date(),
      },
    });

    const approvedCount = await tx.eventRegistration.count({
      where: {
        eventId,
        status: {
          in: [RegistrationStatus.approved, RegistrationStatus.completed],
        },
      },
    });

    await tx.event.update({
      where: { id: eventId },
      data: { currentParticipants: approvedCount },
    });
  });

  return { status: 200, body: { success: true } };
};
