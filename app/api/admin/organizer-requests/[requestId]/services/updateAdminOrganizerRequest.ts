import { prisma } from "@shared/lib/prisma";
import { z } from "zod";

const updateOrganizerRequestSchema = z
  .object({
    action: z.enum(["approve", "reject"]),
    rejectionReason: z.string().trim().max(500).optional().nullable(),
  })
  .superRefine((data, ctx) => {
    if (data.action === "reject" && !data.rejectionReason) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Укажите причину отклонения",
        path: ["rejectionReason"],
      });
    }
  });

type UpdateAdminOrganizerRequestInput = {
  requestId: string;
  adminId: string;
  payload: unknown;
};

type UpdateAdminOrganizerRequestResult =
  | {
      status: 200;
      body: {
        success: true;
        data: {
          id: string;
          status: "approved" | "rejected";
          userId: string;
          role: "volunteer" | "organizer";
        };
      };
    }
  | { status: 400 | 404; body: { message: string } };

export const updateAdminOrganizerRequest = async ({
  requestId,
  adminId,
  payload,
}: UpdateAdminOrganizerRequestInput): Promise<UpdateAdminOrganizerRequestResult> => {
  const parsed = updateOrganizerRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: 400,
      body: { message: parsed.error.issues[0]?.message ?? "Некорректные данные" },
    };
  }

  const organizerRequest = await prisma.organizerRoleRequest.findUnique({
    where: { id: requestId },
    select: {
      id: true,
      userId: true,
    },
  });

  if (!organizerRequest) {
    return { status: 404, body: { message: "Заявка не найдена" } };
  }

  const currentRequest = await prisma.organizerRoleRequest.findUnique({
    where: { id: requestId },
    select: { status: true },
  });

  if (!currentRequest) {
    return { status: 404, body: { message: "Заявка не найдена" } };
  }

  if (currentRequest.status === parsed.data.action) {
    return {
      status: 400,
      body: {
        message:
          parsed.data.action === "approve"
            ? "Заявка уже одобрена"
            : "Заявка уже отклонена",
      },
    };
  }

  const nextStatus = parsed.data.action === "approve" ? "approved" : "rejected";
  const nextRole = parsed.data.action === "approve" ? "organizer" : "volunteer";

  const result = await prisma.$transaction(async (tx) => {
    const updatedRequest = await tx.organizerRoleRequest.update({
      where: { id: requestId },
      data: {
        status: nextStatus,
        reviewedAt: new Date(),
        reviewedById: adminId,
        rejectionReason: nextStatus === "rejected" ? parsed.data.rejectionReason ?? null : null,
      },
      select: {
        id: true,
        userId: true,
        status: true,
      },
    });

    await tx.user.update({
      where: { id: organizerRequest.userId },
      data: {
        role: nextRole,
      },
    });

    return updatedRequest;
  });

  return {
    status: 200,
    body: {
      success: true,
      data: {
        id: result.id,
        status: result.status,
        userId: result.userId,
        role: nextRole,
      },
    },
  };
};
