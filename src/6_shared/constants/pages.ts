export const PAGES = {
  HOME: "/",
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  ORGANIZER_DASHBOARD: "/organizer/dashboard",
  VOLUNTEER_DASHBOARD: "/volunteer/dashboard",
  ORGANIZER_EVENTS: "/organizer/events",
  EDIT_EVENT: (eventId: string) => `/organizer/events/${eventId}/edit`,
};
