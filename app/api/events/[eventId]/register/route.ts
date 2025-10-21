import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { registerVolunteer } from "../../services/registerVolunteer";

type RouteParams = { params: Promise<{ eventId: string }> };

// -----------------------------------------------------------------------------
// POST /api/events/[eventId]/register — запись волонтёра
// -----------------------------------------------------------------------------
export async function POST(request: Request, context: RouteParams) {
  try {
    const params = await context.params;
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    const role = session.user.role;

    if (role !== "volunteer") {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const payload = await safeJson(request);
    const result = await registerVolunteer({
      volunteerId: session.user.id,
      eventId: params.eventId,
      payload,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Register volunteer API error", error);
    return NextResponse.json(
      { message: "Не удалось записаться на мероприятие" },
      { status: 500 }
    );
  }
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const safeJson = async (request: Request) => {
  try {
    return await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {};
    }
    throw error;
  }
};
