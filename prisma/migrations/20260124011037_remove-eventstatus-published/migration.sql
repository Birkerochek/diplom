-- Update existing rows that still use the old enum value.
UPDATE "Event"
SET "status" = 'active'
WHERE "status" = 'published';

-- Temporarily drop default to allow enum type change.
ALTER TABLE "Event" ALTER COLUMN "status" DROP DEFAULT;

-- Replace enum type without the removed value.
ALTER TYPE "EventStatus" RENAME TO "EventStatus_old";
CREATE TYPE "EventStatus" AS ENUM ('draft', 'active', 'completed', 'cancelled');
ALTER TABLE "Event" ALTER COLUMN "status" TYPE "EventStatus" USING ("status"::text::"EventStatus");
ALTER TABLE "Event" ALTER COLUMN "status" SET DEFAULT 'draft';

-- Drop the old enum type.
DROP TYPE "EventStatus_old";
