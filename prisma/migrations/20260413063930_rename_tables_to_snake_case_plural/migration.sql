-- Rename tables to lowercase plural names
ALTER TABLE "User" RENAME TO "users";
ALTER TABLE "Event" RENAME TO "events";
ALTER TABLE "EventRegistration" RENAME TO "event_registrations";
ALTER TABLE "VolunteerHour" RENAME TO "volunteer_hours";
ALTER TABLE "Certificate" RENAME TO "certificates";
ALTER TABLE "EventModerationRequest" RENAME TO "event_moderation_requests";

-- Rename indexes to match new table names
ALTER INDEX "User_email_key" RENAME TO "users_email_key";
ALTER INDEX "User_role_idx" RENAME TO "users_role_idx";
ALTER INDEX "User_createdAt_idx" RENAME TO "users_createdAt_idx";

ALTER INDEX "Event_organizerId_idx" RENAME TO "events_organizerId_idx";
ALTER INDEX "Event_status_idx" RENAME TO "events_status_idx";
ALTER INDEX "Event_eventDate_idx" RENAME TO "events_eventDate_idx";
ALTER INDEX "Event_activityType_idx" RENAME TO "events_activityType_idx";
ALTER INDEX "Event_createdAt_idx" RENAME TO "events_createdAt_idx";

ALTER INDEX "EventRegistration_eventId_idx" RENAME TO "event_registrations_eventId_idx";
ALTER INDEX "EventRegistration_volunteerId_idx" RENAME TO "event_registrations_volunteerId_idx";
ALTER INDEX "EventRegistration_status_idx" RENAME TO "event_registrations_status_idx";
ALTER INDEX "EventRegistration_eventId_volunteerId_key" RENAME TO "event_registrations_eventId_volunteerId_key";

ALTER INDEX "VolunteerHour_volunteerId_idx" RENAME TO "volunteer_hours_volunteerId_idx";
ALTER INDEX "VolunteerHour_eventId_idx" RENAME TO "volunteer_hours_eventId_idx";
ALTER INDEX "VolunteerHour_date_idx" RENAME TO "volunteer_hours_date_idx";
ALTER INDEX "VolunteerHour_activityType_idx" RENAME TO "volunteer_hours_activityType_idx";
ALTER INDEX "VolunteerHour_verified_idx" RENAME TO "volunteer_hours_verified_idx";

ALTER INDEX "Certificate_certificateNumber_key" RENAME TO "certificates_certificateNumber_key";
ALTER INDEX "Certificate_volunteerId_idx" RENAME TO "certificates_volunteerId_idx";
ALTER INDEX "Certificate_certificateNumber_idx" RENAME TO "certificates_certificateNumber_idx";
ALTER INDEX "Certificate_issuedAt_idx" RENAME TO "certificates_issuedAt_idx";

ALTER INDEX "EventModerationRequest_eventId_idx" RENAME TO "event_moderation_requests_eventId_idx";
ALTER INDEX "EventModerationRequest_status_idx" RENAME TO "event_moderation_requests_status_idx";
ALTER INDEX "EventModerationRequest_submittedAt_idx" RENAME TO "event_moderation_requests_submittedAt_idx";

-- Rename primary key and foreign key constraints to match new table names
ALTER TABLE "users" RENAME CONSTRAINT "User_pkey" TO "users_pkey";
ALTER TABLE "events" RENAME CONSTRAINT "Event_pkey" TO "events_pkey";
ALTER TABLE "event_registrations" RENAME CONSTRAINT "EventRegistration_pkey" TO "event_registrations_pkey";
ALTER TABLE "volunteer_hours" RENAME CONSTRAINT "VolunteerHour_pkey" TO "volunteer_hours_pkey";
ALTER TABLE "certificates" RENAME CONSTRAINT "Certificate_pkey" TO "certificates_pkey";
ALTER TABLE "event_moderation_requests" RENAME CONSTRAINT "EventModerationRequest_pkey" TO "event_moderation_requests_pkey";

ALTER TABLE "events" RENAME CONSTRAINT "Event_organizerId_fkey" TO "events_organizerId_fkey";

ALTER TABLE "event_registrations" RENAME CONSTRAINT "EventRegistration_eventId_fkey" TO "event_registrations_eventId_fkey";
ALTER TABLE "event_registrations" RENAME CONSTRAINT "EventRegistration_volunteerId_fkey" TO "event_registrations_volunteerId_fkey";
ALTER TABLE "event_registrations" RENAME CONSTRAINT "EventRegistration_reviewedById_fkey" TO "event_registrations_reviewedById_fkey";

ALTER TABLE "volunteer_hours" RENAME CONSTRAINT "VolunteerHour_volunteerId_fkey" TO "volunteer_hours_volunteerId_fkey";
ALTER TABLE "volunteer_hours" RENAME CONSTRAINT "VolunteerHour_eventId_fkey" TO "volunteer_hours_eventId_fkey";
ALTER TABLE "volunteer_hours" RENAME CONSTRAINT "VolunteerHour_registrationId_fkey" TO "volunteer_hours_registrationId_fkey";
ALTER TABLE "volunteer_hours" RENAME CONSTRAINT "VolunteerHour_verifiedById_fkey" TO "volunteer_hours_verifiedById_fkey";

ALTER TABLE "certificates" RENAME CONSTRAINT "Certificate_volunteerId_fkey" TO "certificates_volunteerId_fkey";
ALTER TABLE "certificates" RENAME CONSTRAINT "Certificate_issuedById_fkey" TO "certificates_issuedById_fkey";

ALTER TABLE "event_moderation_requests" RENAME CONSTRAINT "EventModerationRequest_eventId_fkey" TO "event_moderation_requests_eventId_fkey";
