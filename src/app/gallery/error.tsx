"use client";

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function GalleryError({
  error,
  // reset,
}: {
  error: Error & { digest?: string };
  // reset: () => void;
}) {
  useEffect(() => {
    // error logs
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
    <div
      className="flex min-h-screen items-center justify-center p-4"
      role="alert"
    >
      <div className="bg-destructive/50 max-w-3xl rounded-lg p-4 text-center">
        <h2 className="mb-2 text-xl font-semibold hover:text-red-500">
          Something went wrong!
        </h2>
        <p className="mb-4 text-sm">Unable to load gallery.(</p>
        <Link href={"/"}>
          <Button variant="outline" className={"hover:cursor-pointer"}>
            <p aria-label="Refresh" className="text-xl">
              ♻️
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
