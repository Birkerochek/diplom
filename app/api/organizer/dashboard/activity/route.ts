import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { getActivityStats } from "./services/getActivityStats";

export async function GET() {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Пользователь не авторизован" },
        { status: 401 }
      );
    }

    if (session.user.role !== "organizer") {
      return NextResponse.json(
        { message: "Недостаточно прав для просмотра панели" },
        { status: 403 }
      );
    }

    const stats = await getActivityStats(session.user.id);

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error("Organizer activity stats API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить статистику активности" },
      { status: 500 }
    );
  }
}
