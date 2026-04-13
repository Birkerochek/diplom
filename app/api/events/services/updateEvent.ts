import { EventStatus, RegistrationStatus } from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { eventCreateSchema } from "@shared/zod";
import { z } from "zod";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type UpdateEventInput = {
  actorId: string;
  actorRole: "organizer" | "admin";
  eventId: string;
  payload: unknown;
};

type UpdateEventResult =
  | { status: 200; body: { success: true; data: { id: string } } }
  | { status: 400 | 403 | 404; body: { message: string } };

const eventUpdateSchema = eventCreateSchema
  .safeExtend({
    status: z.nativeEnum(EventStatus).optional(),
    rejectionReason: z.string().trim().min(3).max(1000).nullable().optional(),
  })
  .partial()
  .refine((value) => Object.keys(value).length > 0, {
    message: "Передайте хотя бы одно поле для обновления",
  });

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const updateEvent = async ({ actorId, actorRole, eventId, payload }: UpdateEventInput) => {
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

  if (actorRole === "organizer" && target.organizerId !== actorId) {
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
  if (hasOwn("skillsNeeded") && Array.isArray(data.skillsNeeded)) {
    updateData.skillsNeeded = data.skillsNeeded;
  }
    if (data.status) {
    if (actorRole === "organizer") {
      const allowedOrganizerStatuses = new Set<EventStatus>(Object.values(EventStatus));

      if (!allowedOrganizerStatuses.has(data.status)) {
        return {
          status: 403,
          body: { message: "Организатор не может установить этот статус" },
        } satisfies UpdateEventResult;
      }

    }

    updateData.status = data.status;
  }

  if (hasOwn("rejectionReason")) {
    updateData.rejectionReason = data.rejectionReason ?? null;
  }

  if (data.status === EventStatus.pending_moderation) {
    updateData.submittedForModerationAt = new Date();
    updateData.rejectionReason = null;
    updateData.rejectedAt = null;
    updateData.rejectedById = null;
    updateData.suspensionReason = null;
    updateData.suspendedAt = null;
    updateData.suspendedById = null;
    updateData.moderationIteration = { increment: 1 };
  }

  if (actorRole === "admin" && data.status === EventStatus.active) {
    const now = new Date();

    updateData.lastModeratedAt = now;
    updateData.approvedAt = now;
    updateData.approvedById = actorId;
    updateData.rejectionReason = null;
    updateData.rejectedAt = null;
    updateData.rejectedById = null;
    updateData.suspensionReason = null;
    updateData.suspendedAt = null;
    updateData.suspendedById = null;
  }

  if (actorRole === "admin" && data.status === EventStatus.rejected) {
    const now = new Date();

    updateData.lastModeratedAt = now;
    updateData.rejectedAt = now;
    updateData.rejectedById = actorId;
    updateData.approvedAt = null;
    updateData.approvedById = null;
  }

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
  } else if (data.status === EventStatus.pending_moderation) {
    await prisma.$transaction(async (tx) => {
      const updatedEvent = await tx.event.update({
        where: { id: eventId },
        data: updateData,
        select: {
          id: true,
          title: true,
          description: true,
          activityType: true,
          eventDate: true,
          startTime: true,
          endTime: true,
          location: true,
          address: true,
          maxParticipants: true,
          requirements: true,
          skillsNeeded: true,
          moderationIteration: true,
        },
      });

      await tx.eventModerationRequest.create({
        data: {
          eventId,
          iteration: updatedEvent.moderationIteration,
          submittedById: actorId,
          snapshot: updatedEvent,
        },
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
