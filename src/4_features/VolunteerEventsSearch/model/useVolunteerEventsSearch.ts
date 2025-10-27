import { useCallback, useState } from "react";

import { useDebounce } from "@shared/utils";

const DEFAULT_DEBOUNCE_MS = 400;

type UseVolunteerEventsSearchParams = {
  initialValue?: string;
  debounceMs?: number;
};

export const useVolunteerEventsSearch = ({
  initialValue = "",
  debounceMs = DEFAULT_DEBOUNCE_MS,
}: UseVolunteerEventsSearchParams = {}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const debouncedSearch = useDebounce(searchTerm, debounceMs);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return {
    searchTerm,
    debouncedSearch,
    onSearchChange: handleSearchChange,
  };
};
