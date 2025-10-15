import { api } from "@shared/api/axios";
import type {
  EventStatus,
  RegistrationStatus,
} from "../../../../app/generated/prisma";

export type RegistrationSummary = Record<RegistrationStatus, number> & {
  total: number;
};

export type EventVolunteer = {
  id: string;
  status: RegistrationStatus;
  registeredAt: string;
  motivationLetter: string | null;
  hoursCompleted: number | null;
  totalVolunteerHours: number;
  volunteer: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    avatarUrl: string | null;
  };
};

export type FetchEventResponse = {
  id: string;
  title: string;
  description: string | null;
  status: EventStatus;
  activityType: string;
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
  capacity: {
    maxParticipants: number | null;
    currentParticipants: number | null;
    confirmedParticipants: number;
    fillRate: number | null;
  };
  stats: {
    registrations: RegistrationSummary;
    volunteerHours: number;
  };
  organizer: {
    id: string;
    name: string;
    email: string;
  };
  requirements: string | null;
  skillsNeeded: string[];
  volunteers: EventVolunteer[];
  tags: string[];
  timestamps: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
  };
};

export const fetchEvent = async (eventId: string): Promise<FetchEventResponse> => {
  const { data } = await api.get<FetchEventResponse>(`/api/events/${eventId}`);

  return data;
};
