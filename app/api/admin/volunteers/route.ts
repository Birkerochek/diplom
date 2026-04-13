import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { getAdminVolunteers } from "./services/getAdminVolunteers";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Пользователь не авторизован" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Недостаточно прав для просмотра волонтёров" },
        { status: 403 }
      );
    }

    const result = await getAdminVolunteers(request.url);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Admin volunteers API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить список волонтёров" },
      { status: 500 }
    );
  }
}
