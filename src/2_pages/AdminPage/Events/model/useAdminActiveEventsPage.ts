"use client";

import { useState } from "react";
import { EventStatus } from "../../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";

export const useAdminActiveEventsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const eventsQuery = useFetchEvents({
    status: [EventStatus.active],
    sortBy: "eventDate",
    sortDir: "asc",
    search: search || undefined,
    perPage: 50,
  });

  const events = eventsQuery.data?.data ?? [];

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInput.trim());
  };

  return {
    searchInput,
    setSearchInput,
    eventsQuery,
    events,
    handleSearchSubmit,
  };
};
