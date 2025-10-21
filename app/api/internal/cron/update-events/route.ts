import { NextResponse } from "next/server";
import { autoCompleteExpiredEvents } from "@shared/lib/jobs/autoCompleteExpiredEvents";

const CRON_SECRET = process.env.CRON_SECRET;

const isAuthorized = (request: Request) => {
  if (!CRON_SECRET) {
    return true;
  }

  const header = request.headers.get("authorization");
  return header === `Bearer ${CRON_SECRET}`;
};

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const result = await autoCompleteExpiredEvents();

  return NextResponse.json(result);
}

export async function GET(request: Request) {
  return POST(request);
}
