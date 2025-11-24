import { ErrorPage } from "@/components/error/error-page";

export default function NotFound() {
  return (
    <ErrorPage
      status={404}
      message="Hmm, we looked everywhere — but that page isn’t here."
    />
  );
}
