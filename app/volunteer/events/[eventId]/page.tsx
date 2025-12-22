import { VolunteerEventDetailsPageServer } from "@pages/VolunteerPage/EventDetails";

type PageProps = {
  params: Promise<{ eventId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { eventId } = await params;

  return <VolunteerEventDetailsPageServer eventId={eventId} />;
}
