import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { fetchEvent } from "@shared/api";
import { QUERY_KEYS } from "@shared/constants";
import { getQueryClient } from "@shared/utils";

import { VolunteerEventDetailsPage } from "./VolunteerEventDetailsPage";

type VolunteerEventDetailsPageServerProps = {
  eventId: string;
};

export const VolunteerEventDetailsPageServer = async ({
  eventId,
}: VolunteerEventDetailsPageServerProps) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.EVENT, eventId],
    queryFn: () => fetchEvent(eventId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VolunteerEventDetailsPage eventId={eventId} />
    </HydrationBoundary>
  );
};
