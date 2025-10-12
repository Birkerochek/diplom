import { NextResponse } from "next/server";
import { hash } from "argon2";
import { prisma } from "@shared/lib";
import { registerSchema } from "@shared/zod/auth";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = registerSchema.safeParse(payload);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
      return NextResponse.json({ message }, { status: 400 });
    }

    const { firstName, lastName, email, password, role, organizationName, phone } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { message: "Пользователь с таким email уже существует" },
        { status: 409 }
      );
    }

    const passwordHash = await hash(password);

    const name = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");

    await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
        role,
        phone,
        organizationName: role === "organizer" ? organizationName ?? null : null,
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Register API error", error);
    return NextResponse.json(
      { message: "Не удалось завершить регистрацию" },
      { status: 500 }
    );
  }
}
