export const isKnownRole = (role: string | undefined | null): role is "volunteer" | "organizer" | "admin" => {
  return role === "volunteer" || role === "organizer" || role === "admin";
};

export const canAccessVolunteerScope = (role: string | undefined | null) => role === "volunteer";

export const canAccessOrganizerScope = (role: string | undefined | null) => role === "organizer";

export const canAccessAdminScope = (role: string | undefined | null) => role === "admin";
