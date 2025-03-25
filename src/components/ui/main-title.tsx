"use client";

import NextLogo from "./next-logo";

// Styles
const centeredDiv = "flex min-h-screen flex-row items-center justify-center";
const titleStyle =
  "flex p-3 gap-3 text-4xl md:text-6xl tracking-tighter md:tracking-normal";
const nextLogoStyle = "pt-1 space-y-2 w-36 md:w-60";
const textStyle =
  "mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text font-bold text-transparent";


export default function MainTitle() {
  return (
    <div className={centeredDiv}>
      <div className={titleStyle}>
        <h1 className={textStyle}>
          Image <span>Gallery</span> w/{" "}
          <div className={nextLogoStyle}>
            <NextLogo></NextLogo>
          </div>
        </h1>
      </div>
    </div>
  );
}
