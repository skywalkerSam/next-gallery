"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";

export default function GalleryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    captureException(error);
  }, [error]);

  return (
    <div>
      <div className="flex min-h-screen flex-row items-center justify-center p-3">
        {/* <h1 className="m-6 text-3xl text-red-600">Something went wrong!</h1> */}
        {/* <br /> */}
        <div>
          <button
            className="pointer text-6xl text-slate-900"
            onClick={() => reset()}
          >
            ♻️
          </button>
        </div>
      </div>
      {/* <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}
    </div>
  );
}
