import {
  EventStatus,
  RegistrationStatus,
} from "../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { addMonths, startOfMonth, subMonths } from "date-fns";

const VOLUNTEER_STATUSES = [
  RegistrationStatus.approved,
  RegistrationStatus.completed,
];

export type OrganizerDashboardStats = {
  organizationName: string;
  stats: {
    volunteers: {
      total: number;
      newThisMonth: number;
    };
    events: {
      active: number;
      upcoming: number;
    };
    monthlyHours: {
      total: number;
      changePercent: number | null;
    };
    totalHours: {
      total: number;
    };
  };
};

export const getDashboardStats = async (
  organizerId: string
): Promise<OrganizerDashboardStats> => {
  const [organizer, totalVolunteers, newVolunteers, activeEvents, upcomingEvents] =
    await Promise.all([
      prisma.user.findUnique({
        where: { id: organizerId },
        select: { organizationName: true, name: true },
      }),
      prisma.eventRegistration.findMany({
        where: {
          event: { organizerId },
          status: { in: VOLUNTEER_STATUSES },
        },
        distinct: ["volunteerId"],
        select: { volunteerId: true },
      }),
      prisma.eventRegistration.findMany({
        where: {
          event: { organizerId },
          status: { in: VOLUNTEER_STATUSES },
          registeredAt: { gte: startOfMonth(new Date()) },
        },
        distinct: ["volunteerId"],
        select: { volunteerId: true },
      }),
      prisma.event.count({
        where: { organizerId, status: EventStatus.active },
      }),
      prisma.event.count({
        where: {
          organizerId,
          status: { in: [EventStatus.published, EventStatus.active] },
          eventDate: { gte: new Date() },
        },
      }),
    ]);

  if (!organizer) {
    throw new Error("Organizer not found");
  }

  const currentMonthStart = startOfMonth(new Date());
  const nextMonthStart = addMonths(currentMonthStart, 1);
  const previousMonthStart = subMonths(currentMonthStart, 1);

  const [monthlyHoursAgg, previousMonthlyHoursAgg, totalHoursAgg] =
    await Promise.all([
      prisma.volunteerHour.aggregate({
        where: {
          date: { gte: currentMonthStart, lt: nextMonthStart },
          event: { organizerId },
        },
        _sum: { hours: true },
      }),
      prisma.volunteerHour.aggregate({
        where: {
          date: { gte: previousMonthStart, lt: currentMonthStart },
          event: { organizerId },
        },
        _sum: { hours: true },
      }),
      prisma.volunteerHour.aggregate({
        where: { event: { organizerId } },
        _sum: { hours: true },
      }),
    ]);

  const monthlyHours = monthlyHoursAgg._sum.hours ?? 0;
  const previousMonthlyHours = previousMonthlyHoursAgg._sum.hours ?? 0;
  const totalHours = totalHoursAgg._sum.hours ?? 0;

  const changePercent =
    previousMonthlyHours === 0
      ? monthlyHours > 0
        ? 100
        : null
      : Number(
          (
            ((monthlyHours - previousMonthlyHours) / previousMonthlyHours) *
            100
          ).toFixed(1)
        );

  return {
    organizationName: organizer.organizationName ?? organizer.name ?? "",
    stats: {
      volunteers: {
        total: totalVolunteers.length,
        newThisMonth: newVolunteers.length,
      },
      events: {
        active: activeEvents,
        upcoming: upcomingEvents,
      },
      monthlyHours: {
        total: monthlyHours,
        changePercent,
      },
      totalHours: {
        total: totalHours,
      },
    },
  };
};
