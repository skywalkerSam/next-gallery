"use client";

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ImagesError({
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
      className="flex min-h-screen items-center justify-center p-3"
      role="alert"
    >
      <Link href={"/gallery"}>
        <Button variant="ghost" className="text-3xl">
          ♻️
        </Button>
      </Link>
    </div>
  );
}
