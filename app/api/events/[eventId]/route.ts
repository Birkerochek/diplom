import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { deleteEvent } from "../services/deleteEvent";
import { getEvent } from "../services/getEvent";
import { updateEvent } from "../services/updateEvent";

type RouteParams = { params: Promise<{ eventId: string }> };

// -----------------------------------------------------------------------------
// GET /api/events/[eventId] — детализация мероприятия
// -----------------------------------------------------------------------------
export async function GET(_request: Request, context: RouteParams) {
  try {
    const params = await context.params;
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = resolveRole(session.user.role);

    if (!role) {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const result = await getEvent({
      userId: session.user.id,
      role,
      eventId: params.eventId,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Get event API error", error);
    return NextResponse.json(
      { message: "Не удалось получить мероприятие" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// PATCH /api/events/[eventId] — обновление (только организатор)
// -----------------------------------------------------------------------------
export async function PATCH(request: Request, context: RouteParams) {
  try {
    const params = await context.params;
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = resolveRole(session.user.role);

    if (role !== "organizer") {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const payload = await request.json();
    const result = await updateEvent({
      organizerId: session.user.id,
      eventId: params.eventId,
      payload,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Update event API error", error);
    return NextResponse.json(
      { message: "Не удалось обновить мероприятие" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// DELETE /api/events/[eventId] — удаление (только организатор)
// -----------------------------------------------------------------------------
export async function DELETE(_request: Request, context: RouteParams) {
  try {
    const params = await context.params;
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = resolveRole(session.user.role);

    if (role !== "organizer") {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const result = await deleteEvent({
      organizerId: session.user.id,
      eventId: params.eventId,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Delete event API error", error);
    return NextResponse.json(
      { message: "Не удалось удалить мероприятие" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const resolveRole = (role: string | undefined | null) => {
  if (role === "organizer" || role === "volunteer") {
    return role;
  }

  return null;
};
