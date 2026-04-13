import { EventModerationStatus, EventStatus } from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { eventCreateSchema } from "@shared/zod";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type CreateEventInput = {
  organizerId: string;
  payload: unknown;
};

type CreateEventResult =
  | {
      status: 201;
      body: {
        success: true;
        data: { id: string; status: EventStatus; moderationMessage: string };
      };
    }
  | { status: 400; body: { message: string } };

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const createEvent = async ({ organizerId, payload }: CreateEventInput) => {
  const parsed = eventCreateSchema.safeParse(payload);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
    return { status: 400, body: { message } } satisfies CreateEventResult;
  }

  const data = parsed.data;
  const start = new Date(data.startDateTime);
  const end = new Date(data.endDateTime);
  const durationHours = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 3_600_000));

  const created = await prisma.$transaction(async (tx) => {
    const event = await tx.event.create({
      data: {
        organizerId,
        title: data.title.trim(),
        description: data.description.trim(),
        activityType: data.activityType.trim(),
        eventDate: new Date(data.eventDate),
        startTime: start,
        endTime: end,
        location: data.location.trim(),
        address: data.address,
        requiredHours: durationHours,
        maxParticipants: data.maxParticipants,
        requirements: data.requirements ?? undefined,
        skillsNeeded: data.skillsNeeded,
        status: EventStatus.pending_moderation,
        submittedForModerationAt: new Date(),
        moderationIteration: 1,
      },
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
      },
    });

    await tx.eventModerationRequest.create({
      data: {
        eventId: event.id,
        iteration: 1,
        status: EventModerationStatus.pending,
        submittedById: organizerId,
        snapshot: event,
      },
    });

    return event;
  });

  return {
    status: 201,
    body: {
      success: true,
      data: {
        id: created.id,
        status: EventStatus.pending_moderation,
        moderationMessage: "Мероприятие отправлено на модерацию",
      },
    },
  } satisfies CreateEventResult;
};
