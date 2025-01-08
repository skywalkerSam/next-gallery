import Link from "next/link";
import { UploadButton } from "@uploadthing/react";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 mb-6 flex flex-col items-center gap-3 sm:items-start">
        <h1 className="row-start-3 mb-3 mt-9 flex flex-wrap items-center justify-center gap-3 text-5xl font-extrabold tracking-tight text-gray-300 sm:text-[5rem]">
          Image <span className="text-[hsl(207,100%,70%)]">Gallery</span> w/{" "}
          <span className="text-[hsl(0,0%,11%)]">NEXT</span>
        </h1>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <Link href="/gallery">
          <div className="flex flex-col items-center gap-3 sm:flex-row mt-3">
            <a
              className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-xl text-gray-400 transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-16 sm:min-w-52 sm:px-5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Image Gallery →
            </a>
            {/* <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
          </div>
        </Link>
        {/* uploadthing image uploads */}
        <div className="flex flex-col items-center gap-3 sm:flex-row mt-36">
        <UploadButton endpoint="imageUploader"></UploadButton>
        </div>
      </main>
      {/* <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <div>
          <small className="text-gray-500">Built with</small>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <br />
          <small className="text-gray-500">
            &copy; Copyright 12024,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className="text-cyan-500"
              target="_blank"
            >
              @skywalkerSam
            </a>
          </small>
        </div>
      </footer> */}
    </div>
  );
}
