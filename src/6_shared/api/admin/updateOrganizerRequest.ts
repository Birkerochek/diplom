import { api } from "@shared/api/axios";

export type UpdateOrganizerRequestPayload = {
  action: "approve" | "reject";
  rejectionReason?: string | null;
};

export type UpdateOrganizerRequestResponse = {
  success: boolean;
  data: {
    id: string;
    status: "approved" | "rejected";
    userId: string;
    role: "volunteer" | "organizer";
  };
};

export const updateOrganizerRequest = async (
  requestId: string,
  payload: UpdateOrganizerRequestPayload
) => {
  const { data } = await api.patch<UpdateOrganizerRequestResponse>(
    `/api/admin/organizer-requests/${requestId}`,
    payload
  );

  return data;
};
