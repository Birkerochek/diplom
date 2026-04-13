"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useAdminVolunteers, useUpdateAdminVolunteer } from "@shared/api";

export const useAdminVolunteersPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const volunteersQuery = useAdminVolunteers({
    search: search || undefined,
    limit: 50,
  });
  const updateVolunteerMutation = useUpdateAdminVolunteer();

  const volunteers = volunteersQuery.data?.data ?? [];
  const summary = volunteersQuery.data?.summary;

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInput.trim());
  };

  const toggleVolunteerStatus = async (volunteerId: string, isActive: boolean) => {
    try {
      await updateVolunteerMutation.mutateAsync({
        volunteerId,
        payload: { isActive: !isActive },
      });

      toast.success(!isActive ? "Волонтёр разблокирован" : "Волонтёр заблокирован");
    } catch (error) {
      console.error("Toggle volunteer status error", error);
      toast.error("Не удалось обновить статус волонтёра");
    }
  };

  return {
    searchInput,
    setSearchInput,
    handleSearchSubmit,
    volunteersQuery,
    volunteers,
    summary,
    toggleVolunteerStatus,
    isUpdating: updateVolunteerMutation.isPending,
  };
};
