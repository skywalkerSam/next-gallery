"use client";

import Image from "next/image";

export default function StarboyLogo() {
  return (
    <div className="flex flex-row items-center justify-center mt-36">
      <Image
        src="/starboy-logo.png"
        alt="App Logo"
        width={210}
        height={210}
        priority
      ></Image>
    </div>
  );
}
