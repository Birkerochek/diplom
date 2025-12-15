import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@shared/config/nextAuth";
import { getVolunteerDashboardStats } from "./services/getVolunteerDashboardStats";

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
        { message: "Недостаточно прав для доступа к ресурсам волонтёра" },
        { status: 403 }
      );
    }

    const stats = await getVolunteerDashboardStats(session.user.id);

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error("Volunteer dashboard API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить данные волонтёрского дашборда" },
      { status: 500 }
    );
  }
}
