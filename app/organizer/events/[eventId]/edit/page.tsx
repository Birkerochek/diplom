import { EditEventPage } from "@pages/OrganizerPage";

export default async function EditEventRoute({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  return <EditEventPage eventId={eventId} />;
}
