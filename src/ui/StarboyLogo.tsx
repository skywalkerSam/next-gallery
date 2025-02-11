"use client";

import Image from "next/image";

export default function StarboyLogo() {
  return (
    <div className="mb-60 mt-60 flex flex-row items-center justify-center">
      <a
        href="https://github.com/skywalkerSam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/starboy-logo.png"
          alt="App Logo"
          width={210}
          height={210}
          priority
        ></Image>
      </a>
    </div>
  );
}
