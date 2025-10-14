import { prisma } from "@shared/lib";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type DeleteEventInput = {
  organizerId: string;
  eventId: string;
};

type DeleteEventResult =
  | { status: 200; body: { success: true } }
  | { status: 403 | 404; body: { message: string } };

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const deleteEvent = async ({ organizerId, eventId }: DeleteEventInput) => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: { organizerId: true },
  });

  if (!event) {
    return { status: 404, body: { message: "Мероприятие не найдено" } } satisfies DeleteEventResult;
  }

  if (event.organizerId !== organizerId) {
    return { status: 403, body: { message: "Недостаточно прав" } } satisfies DeleteEventResult;
  }

  await prisma.event.delete({ where: { id: eventId } });

  return { status: 200, body: { success: true } } satisfies DeleteEventResult;
};
