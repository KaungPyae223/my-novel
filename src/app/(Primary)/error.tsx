"use client";

import ErrorComponent from "@/features/Components/Error/ErrorComponent";
import NotFoundPage from "@/features/NotFound/NotFoundPage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  if (error.status === 404) {
    return <NotFoundPage />;
  }

  return <ErrorComponent error={error} reset={reset} />;
}
