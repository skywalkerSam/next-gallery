"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";

export default function ImagesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
    // captureException(error);

    // Log the error with additional context
    console.error("Gallery Error:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
    captureException(error, {
      tags: { component: "GalleryError" },
    });
  }, [error]);

  return (
    <div>
      <div
        className="flex min-h-screen flex-row items-center justify-center p-3"
        role="alert"
      >
        {/* <h1 className="m-6 text-3xl text-red-600">Unable to load gallery</h1> */}

        <div className="p-3">
          <button
            className="pointer text-6xl text-slate-900"
            onClick={() => reset()}
            aria-label="Retry loading gallery"
            title="Retry loading gallery"
          >
            ♻️
          </button>
        </div>

        <div>
          <p className="mb-4 text-slate-400 border-l border-green-600 p-3">
            Try refreshing the page or do a hard refresh (CTRL+SHIFT+R.)
          </p>
        </div>
      </div>

      {/* <h1 className="m-6 text-3xl text-red-600">Something went wrong!</h1> */}
      {/* <br /> */}
      {/* <div>
          <button
            className="pointer text-6xl text-slate-900"
            onClick={() => reset()}
          >
            ♻️
          </button>
        </div>
      </div> */}
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
