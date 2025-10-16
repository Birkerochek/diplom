import { fetchEvent } from "@shared/api";
import { QUERY_KEYS } from "@shared/constants";
import { getQueryClient } from "@shared/utils"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { EventDetailsPage } from "./EventDetailsPage";

interface EventDetailsPageServerProps {
    eventId: string
}

export const EventDetailsPageServer = async ({eventId}:EventDetailsPageServerProps) => {
  const qc = getQueryClient();
  await qc.prefetchQuery({
    queryKey:[QUERY_KEYS.EVENT, eventId],
    queryFn: () => fetchEvent(eventId)
  })
    return (
    <>
        <HydrationBoundary state={dehydrate(qc)}>
            <EventDetailsPage eventId={eventId}/>
        </HydrationBoundary>
    </>
  )
}