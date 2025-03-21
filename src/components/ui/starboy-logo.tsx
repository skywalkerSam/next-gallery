"use client";

import Image from "next/image";
import "~/styles/starboy-logo.css";

const starboyLogoStyle = "flex flex-row items-center justify-center p-3";

export default function StarboyLogo() {
  return (
    <div className={starboyLogoStyle}>
      <a
        href="https://github.com/skywalkerSam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icon.svg"
          alt="Starboy Logo"
          width={210}
          height={210}
          className="starboy-logo"
          priority
        ></Image>
      </a>
    </div>
  );
}
