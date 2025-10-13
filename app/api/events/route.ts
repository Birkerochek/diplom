import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@shared/lib";
import { nextAuthOptions } from "@shared/config/nextAuth";
import { eventCreateSchema } from "@shared/zod";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Требуется авторизация" },
        { status: 401 }
      );
    }

    if (session.user.role !== "organizer") {
      return NextResponse.json(
        { message: "Недостаточно прав для создания мероприятия" },
        { status: 403 }
      );
    }

    const payload = await request.json();
    const parsed = eventCreateSchema.safeParse(payload);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
      return NextResponse.json({ message }, { status: 400 });
    }

    const data = parsed.data;

    const start = new Date(data.startDateTime);
    const end = new Date(data.endDateTime);
    const diffMs = end.getTime() - start.getTime();
    const diffHoursRaw = diffMs / (1000 * 60 * 60);
    const requiredHours = Math.max(1, Math.ceil(diffHoursRaw));

    const created = await prisma.event.create({
      data: {
        organizerId: session.user.id,
        title: data.title.trim(),
        description: data.description.trim(),
        activityType: data.activityType.trim(),
        eventDate: new Date(data.eventDate),
        startTime: new Date(data.startDateTime),
        endTime: new Date(data.endDateTime),
        location: data.location.trim(),
        address: data.address,
        requiredHours,
        maxParticipants: data.maxParticipants,
        requirements: data.requirements ?? undefined,
        skillsNeeded: data.skillsNeeded,
        status: "published",
      },
      select: { id: true },
    });

    return NextResponse.json(
      { success: true, data: created },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create event API error", error);
    return NextResponse.json(
      { message: "Не удалось создать мероприятие" },
      { status: 500 }
    );
  }
}
