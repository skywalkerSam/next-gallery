"use client";
import type { JSX } from "react";
// import Image from "next/image";

// const centeredDivStyle = "flex items-center justify-center p-3";
const spanStyle = "text-6xl tracking-tight dark:invert";
const nextStyle = "text-6xl text-black hover:text-slate-400";
const jsStyle = "text-2xl tracking-tighter";

export default function NextLogo(): JSX.Element {
  return (
    // <div className={centeredDivStyle}>
    <div>
      <span className={spanStyle}>
        <span className={nextStyle}>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NEXT<span className={jsStyle}>.JS</span>
          </a>
        </span>
      </span>
      {/* <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      /> */}
    </div>
  );
}
