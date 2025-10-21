import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { getDashboardStats } from "./services/getDashboardStats";

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

    const stats = await getDashboardStats(session.user.id);

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error("Organizer dashboard API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить данные панели" },
      { status: 500 }
    );
  }
}
