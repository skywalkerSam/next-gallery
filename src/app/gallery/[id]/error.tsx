"use client";

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ImageError({
  error,
  // reset,
}: {
  error: Error & { digest?: string };
  // reset: () => void;
}) {
  useEffect(() => {
    // error logs
    console.error("Image Error:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
    captureException(error, {
      tags: { component: "ImageError" },
    });
  }, [error]);

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      role="alert"
    >
      <div className="bg-destructive/50 max-w-3xl rounded-lg p-4 text-center">
        <h2 className="mb-2 text-xl font-semibold hover:text-red-500">
          image not found!
        </h2>
        <p className="mb-4 text-sm">
          We encountered an error while fetching this image.(
        </p>
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
