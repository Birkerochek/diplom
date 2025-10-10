import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";

export function useCustomQuery<
  TData,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<
    UseQueryOptions<TData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TData, TError> {
  return useQuery<TData, TError, TData, TQueryKey>({
    queryKey,
    queryFn,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 3,
    ...options,
  });
}
