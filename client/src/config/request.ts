const devBaseURL = "http://47.95.197.56:3000";
const proBaseURL = "http://localhost:3000";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;