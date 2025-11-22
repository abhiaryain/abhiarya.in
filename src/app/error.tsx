"use client";

import { ErrorPage } from "@/components/error/error-page";

export default function RootError() {
  return (
    <ErrorPage
      status={500}
      message="We’re sorry, something went wrong on our end."
      btn="Go Home"
    />
  );
}
