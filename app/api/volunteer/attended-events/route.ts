import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@shared/config/nextAuth";
import { getVolunteerAttendedEvents } from "./services/getVolunteerAttendedEvents";

const MAX_LIMIT = 50;

const parseLimit = (value: string | null) => {
  if (!value) {
    return undefined;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return undefined;
  }

  return Math.min(Math.floor(parsed), MAX_LIMIT);
};

export async function GET(request: NextRequest) {
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

    const limit = parseLimit(request.nextUrl.searchParams.get("limit"));
    const result = await getVolunteerAttendedEvents({
      volunteerId: session.user.id,
      limit,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Volunteer attended events API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить посещенные мероприятия" },
      { status: 500 }
    );
  }
}
