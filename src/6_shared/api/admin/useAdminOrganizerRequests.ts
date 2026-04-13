import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchAdminOrganizerRequests,
  type FetchAdminOrganizerRequestsParams,
  type FetchAdminOrganizerRequestsResponse,
} from "./fetchOrganizerRequests";

export const useAdminOrganizerRequests = (params?: FetchAdminOrganizerRequestsParams) =>
  useCustomQuery<FetchAdminOrganizerRequestsResponse>(
    [QUERY_KEYS.ADMIN_ORGANIZER_REQUESTS, params ?? {}],
    () => fetchAdminOrganizerRequests(params)
  );
