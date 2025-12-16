import { EventStatus, RegistrationStatus } from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { eventCreateSchema } from "@shared/zod";
import { z } from "zod";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type UpdateEventInput = {
  organizerId: string;
  eventId: string;
  payload: unknown;
};

type UpdateEventResult =
  | { status: 200; body: { success: true; data: { id: string } } }
  | { status: 400 | 403 | 404; body: { message: string } };

const eventUpdateSchema = eventCreateSchema
  .safeExtend({
    status: z.nativeEnum(EventStatus).optional(),
  })
  .partial()
  .refine((value) => Object.keys(value).length > 0, {
    message: "Передайте хотя бы одно поле для обновления",
  });

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const updateEvent = async ({ organizerId, eventId, payload }: UpdateEventInput) => {
  const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && !Array.isArray(value);

  const rawPayload = isObject(payload) ? payload : {};

  const hasOwn = (key: string) => Object.prototype.hasOwnProperty.call(rawPayload, key);

  const target = await prisma.event.findUnique({
    where: { id: eventId },
    select: { id: true, organizerId: true, status: true },
  });

  if (!target) {
    return { status: 404, body: { message: "Мероприятие не найдено" } } satisfies UpdateEventResult;
  }

  if (target.organizerId !== organizerId) {
    return { status: 403, body: { message: "Недостаточно прав" } } satisfies UpdateEventResult;
  }

  const parsed = eventUpdateSchema.safeParse(payload);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
    return { status: 400, body: { message } } satisfies UpdateEventResult;
  }

  const data = parsed.data;

  const updateData: Record<string, unknown> = {};

  if (data.title) updateData.title = data.title.trim();
  if (data.description) updateData.description = data.description.trim();
  if (data.activityType) updateData.activityType = data.activityType.trim();
  if (data.eventDate) updateData.eventDate = new Date(data.eventDate);
  if (data.startDateTime) updateData.startTime = new Date(data.startDateTime);
  if (data.endDateTime) updateData.endTime = new Date(data.endDateTime);
  if (data.location) updateData.location = data.location.trim();
  if (hasOwn("address")) {
    updateData.address =
      typeof data.address === "string" && data.address.trim().length > 0
        ? data.address.trim()
        : null;
  }
  if (typeof data.maxParticipants === "number") {
    updateData.maxParticipants = data.maxParticipants;
  }
  if (hasOwn("requirements")) {
    updateData.requirements =
      typeof data.requirements === "string" && data.requirements.trim().length > 0
        ? data.requirements.trim()
        : null;
  }
  if (Array.isArray(data.skillsNeeded)) updateData.skillsNeeded = data.skillsNeeded;
  if (data.status) updateData.status = data.status;

  if (data.startDateTime && data.endDateTime) {
    const start = new Date(data.startDateTime);
    const end = new Date(data.endDateTime);
    const durationHours = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 3_600_000));
    updateData.requiredHours = durationHours;
  }

  const cancellingEvent =
    data.status === EventStatus.cancelled && target.status !== EventStatus.cancelled;

  if (cancellingEvent) {
    const now = new Date();

    await prisma.$transaction(async (tx) => {
      await tx.event.update({
        where: { id: eventId },
        data: updateData,
      });

      await tx.eventRegistration.updateMany({
        where: {
          eventId,
          status: {
            in: [RegistrationStatus.pending, RegistrationStatus.approved],
          },
        },
        data: {
          status: RegistrationStatus.cancelled,
          rejectionReason: null,
          reviewedById: null,
          reviewedAt: now,
          attended: false,
          hoursCompleted: null,
          completedAt: null,
        },
      });

      await tx.event.update({
        where: { id: eventId },
        data: { currentParticipants: 0 },
      });
    });
  } else {
    await prisma.event.update({
      where: { id: eventId },
      data: updateData,
    });
  }

  return {
    status: 200,
    body: { success: true, data: { id: eventId } },
  } satisfies UpdateEventResult;
};
