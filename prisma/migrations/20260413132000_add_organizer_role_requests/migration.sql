CREATE TYPE "OrganizerApplicationStatus" AS ENUM ('pending', 'approved', 'rejected');

CREATE TABLE "organizer_role_requests" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "status" "OrganizerApplicationStatus" NOT NULL DEFAULT 'pending',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "reviewedById" UUID,
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organizer_role_requests_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "organizer_role_requests_userId_key" ON "organizer_role_requests"("userId");
CREATE INDEX "organizer_role_requests_status_idx" ON "organizer_role_requests"("status");
CREATE INDEX "organizer_role_requests_requestedAt_idx" ON "organizer_role_requests"("requestedAt");
CREATE INDEX "organizer_role_requests_reviewedById_idx" ON "organizer_role_requests"("reviewedById");

ALTER TABLE "organizer_role_requests"
ADD CONSTRAINT "organizer_role_requests_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "organizer_role_requests"
ADD CONSTRAINT "organizer_role_requests_reviewedById_fkey"
FOREIGN KEY ("reviewedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

INSERT INTO "organizer_role_requests" (
  "id",
  "userId",
  "status",
  "requestedAt",
  "reviewedAt",
  "createdAt",
  "updatedAt"
)
SELECT
  gen_random_uuid(),
  "id",
  'approved'::"OrganizerApplicationStatus",
  COALESCE("createdAt", CURRENT_TIMESTAMP),
  COALESCE("updatedAt", CURRENT_TIMESTAMP),
  COALESCE("createdAt", CURRENT_TIMESTAMP),
  COALESCE("updatedAt", CURRENT_TIMESTAMP)
FROM "users"
WHERE "role" = 'organizer'
  AND NOT EXISTS (
    SELECT 1
    FROM "organizer_role_requests"
    WHERE "organizer_role_requests"."userId" = "users"."id"
  );
