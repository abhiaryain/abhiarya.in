import { ImageResponse } from "next/og";
import { PERSONAL_DATA } from "@/data/personal";
import { openGraphImages } from "@/lib/open-graph-image";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = PERSONAL_DATA.nickname;
export const contentType = "image/svg+xml";

export default async function Image() {
  return new ImageResponse(openGraphImages, {
    ...size,
  });
}
