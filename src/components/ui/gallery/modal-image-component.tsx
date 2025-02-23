"use client";
import Image from "next/image";
import type { ImageType } from "~/types/ImageType";

import type { JSX } from "react";

export default function ImageComponent({
  image,
}: {
  image: ImageType;
}): JSX.Element {
  return (
    <Image
      src={image.url}
      className="object-contain opacity-0 transition-opacity duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      alt={image.name}
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, 900px"
      style={{ width: "100%", height: "auto", maxHeight: "90vh" }}
      priority
    />
  );
}
