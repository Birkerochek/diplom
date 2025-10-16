import { EventDetailsPageServer } from "@pages/OrganizerPage/EventDetails/ui/EventDetailsPageServer";

export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  

  return <EventDetailsPageServer eventId={eventId}/>
}
