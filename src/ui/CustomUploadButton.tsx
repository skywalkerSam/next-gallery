"use client";

import { UploadButton } from "@uploadthing/react";
// import { OurFileRouter } from "./api/uploadthing/core";
import type { OurFileRouter } from "~/app/api/uploadthing/core";

export default function CustomUploadButton() {
  return (
    <div className="mt-36 flex flex-col items-center gap-3 sm:flex-row">
      {/* <UploadButton endpoint="imageUploader"></UploadButton> */}
      <UploadButton<OurFileRouter, "imageUploader"> endpoint="imageUploader" />
    </div>
  );
}
