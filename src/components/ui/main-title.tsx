"use client";

import NextLogo from "./next-logo";

// import Image from "next/image";

const titleStyle = "text-slate-500 text-5xl tracking-tight p-3 gap-3 inline-flex";

export default function MainTitle() {
  return (
    <div className={titleStyle}>
      <h1>
        {/* <h1 className="row-start-3 flex flex-wrap items-center justify-center gap-3 text-slate-500 sm:text-[4rem]"> */}
        Image <span className="text-blue-400">Gallery</span> w/{" "}
        {/* <span className="text-black tracking-tighter">NEXT.JS</span> */}
        <NextLogo></NextLogo>
      </h1>
    </div>
  );
}
