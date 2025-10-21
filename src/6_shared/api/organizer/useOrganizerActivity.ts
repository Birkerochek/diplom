import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchOrganizerActivity,
  type OrganizerActivityPoint,
} from "./fetchActivity";

export const useOrganizerActivity = () =>
  useCustomQuery<OrganizerActivityPoint[]>(
    [QUERY_KEYS.ORGANIZER_ACTIVITY],
    fetchOrganizerActivity
  );
