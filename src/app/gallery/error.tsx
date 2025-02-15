"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="flex min-h-screen flex-row items-center justify-center p-3">
        <h1 className="text-3xl text-red-600">Something went wrong!</h1>
        {/* <br /> */}
        <div>
          <button className="pointer" onClick={() => reset()}>
            Try again
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
