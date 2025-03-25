"use client";

import NextLogo from "~/components/ui/next-logo";
import { ModeToggle } from "~/components/theme-toggle";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-center justify-items-end p-3 text-xs text-gray-600">
      <div className="mr-2">
        <ModeToggle></ModeToggle>
      </div>
      <footer>
        <div>
          <p>Built w/</p>
          <div className="w-36">
            <NextLogo></NextLogo>
          </div>
          <p>
            &copy; 12025,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className="hover:text-sky-400 hover:underline focus:text-sky-400"
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
