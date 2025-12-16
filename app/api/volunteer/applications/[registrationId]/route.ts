import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@shared/config/nextAuth";
import { cancelVolunteerApplication } from "../services/cancelVolunteerApplication";

type RouteParams = { params: Promise<{ registrationId: string }> };

export async function PATCH(_request: Request, context: RouteParams) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Пользователь не авторизован" },
        { status: 401 }
      );
    }

    if (session.user.role !== "volunteer") {
      return NextResponse.json(
        { message: "Доступ разрешен только волонтерам" },
        { status: 403 }
      );
    }

    const params = await context.params;
    const result = await cancelVolunteerApplication({
      volunteerId: session.user.id,
      registrationId: params.registrationId,
    });

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Volunteer application cancel error", error);
    return NextResponse.json(
      { message: "Не удалось отменить заявку" },
      { status: 500 }
    );
  }
}
