import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { updateRegistrationStatus } from "../../../services/updateRegistrationStatus";

type RouteParams = { params: Promise<{ eventId: string; registrationId: string }> };

export async function PATCH(request: Request, context: RouteParams) {
  try {
    const params = await context.params;
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Требуется авторизация" }, { status: 401 });
    }

    if (session.user.role !== "organizer") {
      return NextResponse.json({ message: "Недостаточно прав" }, { status: 403 });
    }

    const payload = await request.json().catch(() => ({}));

    const result = await updateRegistrationStatus({
      organizerId: session.user.id,
      eventId: params.eventId,
      registrationId: params.registrationId,
      payload,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Update registration status error", error);
    return NextResponse.json(
      { message: "Не удалось изменить статус заявки" },
      { status: 500 }
    );
  }
}
