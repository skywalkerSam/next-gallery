"use client";

// import Image from "next/image";
import type { imageType } from "~/types/imageType";

export default function FullScreenImage({
  expectedImage,
}: {
  expectedImage: imageType;
}) {
  return (
    // looking for these specific tailwind classes to center a div never gets old.)
    <div className="flex min-h-screen flex-row items-center justify-center">
      {/* no use for Image component for this is a full screen image.) */}
      <img
        // key={image?.id ?? ""}
        src={expectedImage?.url ?? ""}
        alt={expectedImage?.name ?? ""}
        // width={900}
        // height={900}
      ></img>
    </div>
  );
}
