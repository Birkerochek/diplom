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
          message: "User with this email already exists",
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
            message: "User with this phone already exists",
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
            message: "Organization is already registered",
            field: "organizationName",
          },
          { status: 409 }
        );
      }
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

    console.info("[Register API] user created", { email, role });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[Register API] unexpected error", error);
    return NextResponse.json(
      { message: "Не удалось завершить регистрацию" },
      { status: 500 }
    );
  }
}
