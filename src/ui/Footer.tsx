"use client";

import Image from "next/image";

export default function Footer() {
  return (
    // <div className="flex min-h-screen flex-row items-center justify-center">
    <footer className="flex flex-row items-center justify-center row-start-3 mb-3 mt-9 flex-wrap">
      <div>
        <small className="text-gray-600">Built w/</small>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image
            // className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </a>
        <br />
        <small className="text-gray-600">
          &copy; Copyright 12025,{" "}
          <a
            href="https://github.com/skywalkerSam/"
            className="hover:text-sky-400 hover:underline"
            target="_blank"
          >
            @skywalkerSam
          </a>
        </small>
      </div>
    </footer>
    // </div>
  );
}
