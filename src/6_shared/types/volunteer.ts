import { RegistrationStatus } from "../../../app/generated/prisma";

export type VolunteerApplication = {
  id: string;
  status: RegistrationStatus;
  rejectionReason: string | null;
  registeredAt: string;
  event: {
    id: string;
    title: string;
    description: string | null;
    activityType: string;
    tags: string[];
    schedule: {
      eventDate: string;
      startTime: string;
      endTime: string;
      requiredHours: number;
    };
    location: {
      name: string;
      address: string | null;
    };
    participants: {
      current: number | null;
      max: number | null;
    };
    organizer: {
      id: string;
      name: string;
    };
  };
};
