import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchAdminVolunteers,
  type FetchAdminVolunteersParams,
  type FetchAdminVolunteersResponse,
} from "./fetchVolunteers";

export const useAdminVolunteers = (params?: FetchAdminVolunteersParams) =>
  useCustomQuery<FetchAdminVolunteersResponse>(
    [QUERY_KEYS.ADMIN_VOLUNTEERS, params ?? {}],
    () => fetchAdminVolunteers(params)
  );
