import { RegistrationStatus } from "../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";

type CancelVolunteerApplicationInput = {
  volunteerId: string;
  registrationId: string;
};

type CancelVolunteerApplicationResult =
  | { status: 200; body: { success: true } }
  | { status: 400 | 403 | 404; body: { message: string } };

const cancellableStatuses = new Set<RegistrationStatus>([
  RegistrationStatus.pending,
  RegistrationStatus.approved,
]);

export const cancelVolunteerApplication = async ({
  volunteerId,
  registrationId,
}: CancelVolunteerApplicationInput): Promise<CancelVolunteerApplicationResult> => {
  const registration = await prisma.eventRegistration.findUnique({
    where: { id: registrationId },
    select: {
      id: true,
      volunteerId: true,
      status: true,
      eventId: true,
    },
  });

  if (!registration) {
    return { status: 404, body: { message: "Заявка не найдена" } };
  }

  if (registration.volunteerId !== volunteerId) {
    return { status: 403, body: { message: "Нет прав на отмену этой заявки" } };
  }

  if (registration.status === RegistrationStatus.cancelled) {
    return { status: 200, body: { success: true } };
  }

  if (!cancellableStatuses.has(registration.status)) {
    return {
      status: 400,
      body: { message: "Заявку с таким статусом нельзя отменить" },
    };
  }

  const eventId = registration.eventId;

  await prisma.$transaction(async (tx) => {
    await tx.eventRegistration.update({
      where: { id: registrationId },
      data: {
        status: RegistrationStatus.cancelled,
        rejectionReason: null,
        reviewedById: null,
        reviewedAt: new Date(),
        attended: false,
        hoursCompleted: null,
        completedAt: null,
      },
    });

    const approvedCount = await tx.eventRegistration.count({
      where: {
        eventId,
        status: {
          in: [RegistrationStatus.approved, RegistrationStatus.completed],
        },
      },
    });

    await tx.event.update({
      where: { id: eventId },
      data: { currentParticipants: approvedCount },
    });
  });

  return { status: 200, body: { success: true } };
};
