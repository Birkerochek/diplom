'use client';

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { EventDetailsPage } from "@pages/OrganizerPage/EventDetails";

const OrganizerEventDetailsPage = () => {
  const params =useParams<{ eventId: string }>();
  const eventId = useMemo(() => params?.eventId ?? "", [params]);

  if (!eventId) {
    return null;
  }

  return <EventDetailsPage eventId={eventId} />;
};

export default OrganizerEventDetailsPage;
