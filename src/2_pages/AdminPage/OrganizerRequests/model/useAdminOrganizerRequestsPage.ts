"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  useAdminOrganizerRequests,
  useUpdateOrganizerRequest,
} from "@shared/api/admin";
import type { OrganizerRequestStatus } from "@shared/api/admin/fetchOrganizerRequests";

export const useAdminOrganizerRequestsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<OrganizerRequestStatus | undefined>(undefined);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const requestsQuery = useAdminOrganizerRequests({
    search: search || undefined,
    limit: 50,
    status,
  });
  const updateRequestMutation = useUpdateOrganizerRequest();

  const requests = requestsQuery.data?.data ?? [];
  const summary = requestsQuery.data?.summary;
  const resolvedSelectedRequestId = requests.some((request) => request.id === selectedRequestId)
    ? selectedRequestId
    : (requests[0]?.id ?? null);
  const selectedRequest = requests.find((request) => request.id === resolvedSelectedRequestId) ?? null;

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInput.trim());
  };

  const handleApprove = async () => {
    if (!selectedRequest) {
      return;
    }

    try {
      await updateRequestMutation.mutateAsync({
        requestId: selectedRequest.id,
        payload: { action: "approve" },
      });
      toast.success("Права организатора выданы");
      setRejectReason("");
      await requestsQuery.refetch();
    } catch (error) {
      console.error("Approve organizer request error", error);
      toast.error("Не удалось одобрить заявку");
    }
  };

  const handleReject = async () => {
    if (!selectedRequest) {
      return;
    }

    if (!rejectReason.trim()) {
      toast.error("Укажите причину отклонения");
      return;
    }

    try {
      await updateRequestMutation.mutateAsync({
        requestId: selectedRequest.id,
        payload: { action: "reject", rejectionReason: rejectReason.trim() },
      });
      toast.success("Заявка отклонена, пользователь остаётся волонтёром");
      await requestsQuery.refetch();
    } catch (error) {
      console.error("Reject organizer request error", error);
      toast.error("Не удалось отклонить заявку");
    }
  };

  return {
    searchInput,
    setSearchInput,
    handleSearchSubmit,
    status,
    setStatus,
    requestsQuery,
    requests,
    summary,
    selectedRequestId: resolvedSelectedRequestId,
    setSelectedRequestId,
    selectedRequest,
    rejectReason,
    setRejectReason,
    approveAction: {
      onApprove: handleApprove,
      isPending: updateRequestMutation.isPending,
    },
    rejectAction: {
      onReject: handleReject,
      isPending: updateRequestMutation.isPending,
    },
  };
};
