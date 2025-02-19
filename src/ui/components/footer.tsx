"use client";

import NextLogo from "./next-logo";

// import Image from "next/image";

const centeredDivStyle =
  "flex flex-row items-center justify-center justify-items-end p-3";
const skywalkerSamStyle =
  "text-slate-600 hover:text-blue-400 hover:underline focus:text-blue-400";

export default function Footer() {
  return (
    <div className={centeredDivStyle}>
      <footer>
        <div>
          <p className="text-slate-600">Built w/</p>
          <NextLogo></NextLogo>
          {/* <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image
            className="dark:invert "
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </a> */}
          {/* <br /> */}
          <p className="text-slate-600">
            &copy; Copyright 12025,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className={skywalkerSamStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              @skywalkerSam
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
