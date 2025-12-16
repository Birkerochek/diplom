export const PAGES = {
  HOME: "/",
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  ORGANIZER_DASHBOARD: "/organizer/dashboard",
  VOLUNTEER_DASHBOARD: "/volunteer/dashboard",
  ORGANIZER_EVENTS: "/organizer/events",
  VOLUNTEER_EVENTS: "/volunteer/events",
  VOLUNTEER_APPLICATIONS: "/volunteer/applications",
  ORGANIZER_REPORTS: "/organizer/reports",
  VOLUNTEER_REPORTS: "/volunteer/reports",
  EDIT_EVENT: (eventId: string) => `/organizer/events/${eventId}/edit`,
};
