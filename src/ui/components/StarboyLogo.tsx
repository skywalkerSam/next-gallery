"use client";

import Image from "next/image";
import "~/styles/StarboyLogo.css";

export default function StarboyLogo() {
  return (
    <div className="mb-72 mt-72 flex flex-row items-center justify-center p-3">
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
          className="starboy-logo"
          priority
        ></Image>
      </a>
    </div>
  );
}
