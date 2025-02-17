import Link from "next/link";
// import ImageUploadButton from "~/ui/ImageUploadButton";
import MainTitle from "~/ui/components/MainTitle";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 mb-6 flex flex-col items-center gap-3 sm:items-start">
        <MainTitle></MainTitle>
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

        <div className="p-3">
          <Link
            href={"/gallery"}
            className="text-xl text-blue-400 hover:text-slate-300 hover:underline active:text-slate-300"
            // className="mt-3 flex h-10 flex-col items-center justify-center gap-3 rounded-full border border-solid border-black/[.08] px-4 text-xl text-gray-400 transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-16 sm:min-w-52 sm:flex-row sm:px-5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] hover:underline hover:text-sky-400"
          >
            Visit Image Gallery →
          </Link>
          {/* <Link href="/gallery">
            <a
              className="mt-3 flex h-10 flex-col items-center justify-center gap-3 rounded-full border border-solid border-black/[.08] px-4 text-xl text-gray-400 transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-16 sm:min-w-52 sm:flex-row sm:px-5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Image Gallery →
            </a>
          </Link> */}
        </div>

        {/* uploadthing image uploads */}
        {/* <ImageUploadButton></ImageUploadButton> */}
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
