"use client";

import ErrorComponent from "@/features/Components/Error/ErrorComponent";
import { notFound } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  if (error.status === 404) {
    return notFound()
  }

  return (
    <div className="h-screen">
      <ErrorComponent error={error} reset={reset} />
    </div>
  );
}
