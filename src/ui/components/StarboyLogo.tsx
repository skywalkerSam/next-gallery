"use client";

import Image from "next/image";
import "~/styles/StarboyLogo.css";

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
          src="/starboy-logo.png"
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
