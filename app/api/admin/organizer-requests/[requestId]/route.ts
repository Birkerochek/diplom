import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { updateAdminOrganizerRequest } from "./services/updateAdminOrganizerRequest";

type RouteParams = { params: Promise<{ requestId: string }> };

export async function PATCH(request: Request, context: RouteParams) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Пользователь не авторизован" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Недостаточно прав для модерации заявок организаторов" },
        { status: 403 }
      );
    }

    const params = await context.params;
    const payload = await request.json();
    const result = await updateAdminOrganizerRequest({
      requestId: params.requestId,
      adminId: session.user.id,
      payload,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Admin organizer request update API error", error);
    return NextResponse.json(
      { message: "Не удалось обновить заявку организатора" },
      { status: 500 }
    );
  }
}
