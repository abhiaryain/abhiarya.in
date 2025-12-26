import "server-only";

import { headers } from "next/headers";

export async function getBaseURL() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const baseURL = `${protocol}://${host}`;
  return baseURL;
}
