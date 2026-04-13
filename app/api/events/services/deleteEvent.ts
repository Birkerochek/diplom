import { prisma } from "@shared/lib/prisma";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type DeleteEventInput = {
  actorId: string;
  actorRole: "organizer" | "admin";
  eventId: string;
};

type DeleteEventResult =
  | { status: 200; body: { success: true } }
  | { status: 403 | 404; body: { message: string } };

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const deleteEvent = async ({ actorId, actorRole, eventId }: DeleteEventInput) => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: { organizerId: true, status: true },
  });

  if (!event) {
    return { status: 404, body: { message: "Мероприятие не найдено" } } satisfies DeleteEventResult;
  }

  if (actorRole === "organizer" && event.organizerId !== actorId) {
    return { status: 403, body: { message: "Недостаточно прав" } } satisfies DeleteEventResult;
  }

  if (event.status === "completed") {
    return { status: 403, body: { message: "Нельзя удалить завершенное мероприятие" } } satisfies DeleteEventResult;
  }

  await prisma.event.delete({ where: { id: eventId } });

  return { status: 200, body: { success: true } } satisfies DeleteEventResult;
};
