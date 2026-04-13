import { Role } from "../../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { z } from "zod";

const updateAdminVolunteerSchema = z.object({
  isActive: z.boolean(),
});

type UpdateAdminVolunteerInput = {
  volunteerId: string;
  payload: unknown;
};

type UpdateAdminVolunteerResult =
  | { status: 200; body: { success: true; data: { id: string; isActive: boolean } } }
  | { status: 400 | 404; body: { message: string } };

export const updateAdminVolunteer = async ({
  volunteerId,
  payload,
}: UpdateAdminVolunteerInput): Promise<UpdateAdminVolunteerResult> => {
  const parsed = updateAdminVolunteerSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: 400,
      body: { message: parsed.error.issues[0]?.message ?? "Некорректные данные" },
    };
  }

  const volunteer = await prisma.user.findFirst({
    where: { id: volunteerId, role: Role.volunteer },
    select: { id: true },
  });

  if (!volunteer) {
    return { status: 404, body: { message: "Волонтёр не найден" } };
  }

  const updated = await prisma.user.update({
    where: { id: volunteerId },
    data: { isActive: parsed.data.isActive },
    select: { id: true, isActive: true },
  });

  return {
    status: 200,
    body: {
      success: true,
      data: { id: updated.id, isActive: updated.isActive },
    },
  };
};
