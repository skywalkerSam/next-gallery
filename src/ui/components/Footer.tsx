"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-center justify-items-end p-9">
    <footer>
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
            className="hover:underline hover:text-slate-500 focus:text-slate-500"
            target="_blank"
          >
            @skywalkerSam
          </a>
        </small>
      </div>
    </footer>
    </div>
  );
}
