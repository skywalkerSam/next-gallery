"use client";

import { UploadButton } from "@uploadthing/react";
import { useRouter } from "next/navigation";
// import { OurFileRouter } from "./api/uploadthing/core";
import type { OurFileRouter } from "~/app/api/uploadthing/core";

export default function ImageUploadButton() {
  const router = useRouter();

  return (
    // <div className="mt-36 flex flex-col items-center gap-3 sm:flex-row">
    <div>
      {/* <UploadButton endpoint="imageUploader"></UploadButton> */}
      <UploadButton<OurFileRouter, "imageUploader"> endpoint="imageUploader" onClientUploadComplete={() => {
        router.refresh();
      }}/>
    </div>
  );
}
