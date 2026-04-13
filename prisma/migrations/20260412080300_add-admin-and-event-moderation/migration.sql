-- Add admin role
ALTER TYPE "Role" ADD VALUE IF NOT EXISTS 'admin';

-- Recreate EventStatus enum with moderation states
ALTER TABLE "Event" ALTER COLUMN "status" DROP DEFAULT;
ALTER TYPE "EventStatus" RENAME TO "EventStatus_old";
CREATE TYPE "EventStatus" AS ENUM (
  'draft',
  'pending_moderation',
  'rejected',
  'active',
  'suspended',
  'completed',
  'cancelled',
  'archived'
);
ALTER TABLE "Event"
  ALTER COLUMN "status" TYPE "EventStatus"
  USING (
    CASE
      WHEN "status"::text = 'draft' THEN 'draft'::"EventStatus"
      WHEN "status"::text = 'active' THEN 'active'::"EventStatus"
      WHEN "status"::text = 'completed' THEN 'completed'::"EventStatus"
      WHEN "status"::text = 'cancelled' THEN 'cancelled'::"EventStatus"
      ELSE 'draft'::"EventStatus"
    END
  );
ALTER TABLE "Event" ALTER COLUMN "status" SET DEFAULT 'draft';
DROP TYPE "EventStatus_old";

-- Add moderation metadata to Event
ALTER TABLE "Event"
  ADD COLUMN "submittedForModerationAt" TIMESTAMP(3),
  ADD COLUMN "lastModeratedAt" TIMESTAMP(3),
  ADD COLUMN "approvedAt" TIMESTAMP(3),
  ADD COLUMN "approvedById" UUID,
  ADD COLUMN "rejectedAt" TIMESTAMP(3),
  ADD COLUMN "rejectedById" UUID,
  ADD COLUMN "rejectionReason" TEXT,
  ADD COLUMN "suspendedAt" TIMESTAMP(3),
  ADD COLUMN "suspendedById" UUID,
  ADD COLUMN "suspensionReason" TEXT,
  ADD COLUMN "archivedAt" TIMESTAMP(3),
  ADD COLUMN "archivedById" UUID,
  ADD COLUMN "moderationIteration" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "moderationVersion" INTEGER NOT NULL DEFAULT 0;

-- Moderation request enum and table
CREATE TYPE "EventModerationStatus" AS ENUM ('pending', 'approved', 'rejected', 'revoked');

CREATE TABLE "EventModerationRequest" (
  "id" UUID NOT NULL,
  "eventId" UUID NOT NULL,
  "iteration" INTEGER NOT NULL,
  "status" "EventModerationStatus" NOT NULL DEFAULT 'pending',
  "submittedById" UUID NOT NULL,
  "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "decisionById" UUID,
  "decisionAt" TIMESTAMP(3),
  "decisionReason" TEXT,
  "snapshot" JSONB,
  "version" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "EventModerationRequest_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "EventModerationRequest_eventId_idx" ON "EventModerationRequest"("eventId");
CREATE INDEX "EventModerationRequest_status_idx" ON "EventModerationRequest"("status");
CREATE INDEX "EventModerationRequest_submittedAt_idx" ON "EventModerationRequest"("submittedAt");

ALTER TABLE "EventModerationRequest"
  ADD CONSTRAINT "EventModerationRequest_eventId_fkey"
  FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
