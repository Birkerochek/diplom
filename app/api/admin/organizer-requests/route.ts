import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { getAdminOrganizerRequests } from "./services/getAdminOrganizerRequests";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Пользователь не авторизован" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Недостаточно прав для просмотра заявок организаторов" },
        { status: 403 }
      );
    }

    const result = await getAdminOrganizerRequests(request.url);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Admin organizer requests API error", error);
    return NextResponse.json(
      { message: "Не удалось загрузить заявки организаторов" },
      { status: 500 }
    );
  }
}
