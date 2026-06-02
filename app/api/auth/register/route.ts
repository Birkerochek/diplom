import { NextResponse } from "next/server";
import { hash } from "argon2";
import { prisma } from "@shared/lib/prisma";
import { registerSchema } from "@shared/zod/auth.schema";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = registerSchema.safeParse(payload);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Некорректные данные";
      console.warn("[Register API] validation failed", {
        issues: parsed.error.issues,
      });
      return NextResponse.json({ message }, { status: 400 });
    }

    const { firstName, lastName, email, password, role, organizationName, phone } = parsed.data;

    console.info("[Register API] incoming request", {
      email,
      role,
      hasOrganizationName: Boolean(organizationName),
    });

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      console.warn("[Register API] duplicate email attempt", { email });
      return NextResponse.json(
        {
          message: "Пользователь с таким email уже зарегистрирован",
          field: "email",
        },
        { status: 409 }
      );
    }

    if (phone) {
      const existingPhone = await prisma.user.findFirst({
        where: { phone },
        select: { id: true },
      });

      if (existingPhone) {
        console.warn("[Register API] duplicate phone attempt", { phone });
        return NextResponse.json(
          {
            message: "Пользователь с таким номером телефона уже зарегистрирован",
            field: "phone",
          },
          { status: 409 }
        );
      }
    }

    if (organizationName) {
      const existingOrganization = await prisma.user.findFirst({
        where: {
          organizationName: {
            equals: organizationName,
            mode: "insensitive",
          },
        },
        select: { id: true },
      });

      if (existingOrganization) {
        console.warn("[Register API] duplicate organization attempt", { organizationName });
        return NextResponse.json(
          {
            message: "Такая организация уже зарегистрирована",
            field: "organizationName",
          },
          { status: 409 }
        );
      }
    }

    const passwordHash = await hash(password);

    const name = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");

    const shouldCreateOrganizerRequest = role === "organizer";

    await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
        role: shouldCreateOrganizerRequest ? "volunteer" : role,
        phone,
        organizationName: shouldCreateOrganizerRequest ? organizationName ?? null : null,
        organizerRoleRequest: shouldCreateOrganizerRequest
          ? {
              create: {
                status: "pending",
              },
            }
          : undefined,
      },
    });

    console.info("[Register API] user created", {
      email,
      requestedRole: role,
      assignedRole: shouldCreateOrganizerRequest ? "volunteer" : role,
    });

    return NextResponse.json(
      {
        success: true,
        assignedRole: shouldCreateOrganizerRequest ? "volunteer" : role,
        organizerApplicationStatus: shouldCreateOrganizerRequest ? "pending" : null,
        message: shouldCreateOrganizerRequest
          ? "С вами свяжутся для подтверждения аккаунта"
          : "Регистрация прошла успешно",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Register API] unexpected error", error);
    return NextResponse.json(
      { message: "Не удалось завершить регистрацию" },
      { status: 500 }
    );
  }
}
