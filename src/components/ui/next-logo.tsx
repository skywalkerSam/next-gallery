"use client";
import type { JSX } from "react";
import Image from "next/image";

// const centeredDivStyle = "flex items-center justify-center p-3";
// const spanStyle = "text-slate-950 hover:text-slate-600 dark:invert";
// const nextStyle = "text-5xl font-semibold";
// const jsStyle = "text-lg tracking-tighter";

export default function NextLogo(): JSX.Element {
  return (
    // <div className={centeredDivStyle}>
    <div>
      {/* <span className={spanStyle}>
        <span className={nextStyle}>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NEXT<span className={jsStyle}>.JS</span>
          </a>
        </span>
      </span> */}
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </a>
    </div>
  );
}
