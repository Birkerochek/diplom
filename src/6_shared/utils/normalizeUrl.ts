export const normalizeUrl = (url?: string) =>
  process.env.NODE_ENV === "development"
    ? url?.replace(/localhost/g, "127.0.0.1")
    : url;
