import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@shared/config/nextAuth";
import { getVolunteerApplications } from "./services/getVolunteerApplications";

export async function GET() {
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

    const applications = await getVolunteerApplications(session.user.id);

    return NextResponse.json({ data: applications }, { status: 200 });
  } catch (error) {
    console.error("Volunteer applications API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить заявки волонтера" },
      { status: 500 }
    );
  }
}
