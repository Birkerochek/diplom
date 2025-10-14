import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { createEvent } from "./services/createEvent";
import { listEvents } from "./services/listEvents";

type AllowedRole = "organizer" | "volunteer";

// -----------------------------------------------------------------------------
// GET /api/events — список мероприятий
// -----------------------------------------------------------------------------
export async function GET(request: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = resolveRole(session.user.role);

    if (!role) {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const result = await listEvents({
      userId: session.user.id,
      role,
      url: request.url,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("List events API error", error);
    return NextResponse.json(
      { message: "Не удалось получить мероприятия" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// POST /api/events — создание мероприятия (только организатор)
// -----------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = resolveRole(session.user.role);

    if (role !== "organizer") {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const payload = await request.json();
    const result = await createEvent({ organizerId: session.user.id, payload });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Create event API error", error);
    return NextResponse.json(
      { message: "Не удалось создать мероприятие" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const resolveRole = (role: string | undefined | null): AllowedRole | null => {
  if (role === "organizer" || role === "volunteer") {
    return role;
  }

  return null;
};
