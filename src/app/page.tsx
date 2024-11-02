// import Link from "next/link";
import Image from "next/image";

const testUrls: string[] = [
  "https://utfs.io/f/suXlWOYj6P5mlyveTv2FdBCMI6LznvwAF7HrjlGR8kmbJY5K",
  "https://utfs.io/f/suXlWOYj6P5mgdRzw1a0DF9hfBImAUEWdQ0GqoYgt2Ta1CJr",
  "https://utfs.io/f/suXlWOYj6P5mfqCcKs26pjHoZscJI1UuBOgFKiEMSa3XGvqx",
  "https://utfs.io/f/suXlWOYj6P5mFJe8r1mkT4re6FHUXmsdiP1v7bMD5jWBGg0A",
  "https://utfs.io/f/suXlWOYj6P5mGP0uXcVWCxR45grP3wq2Un6tIcayuhofNY9V",
  "https://utfs.io/f/suXlWOYj6P5meWD2yG7xj2cVFsz0dw8MHNDSt19mhyQLKigI",
  "https://utfs.io/f/suXlWOYj6P5mCRCWOshy9hp3d8uf7xJznlReXIsNiM5B12DA",
  "https://utfs.io/f/suXlWOYj6P5mqtNWj4LMPy9d0NzxhwsMlt8SWb1ojm5pUIEv",
  "https://utfs.io/f/suXlWOYj6P5mJc0GtgUPtN9DlEFPjdUmXnCsaZ6u01K7LMih",
  "https://utfs.io/f/suXlWOYj6P5m39Pb8zsJQi4BAbP5WzmlFnh81v9OcNYVtRyZ",
  "https://utfs.io/f/suXlWOYj6P5m0oRoWEJxwFpHSrVeunNyC7TQMXJsRdzm4bxY",
  "https://utfs.io/f/suXlWOYj6P5mh0uTBjHLuq3fIbErM1Xl482VAz6H9QYDJgRK",
];

const testImages: Array<{ id: number; url: string }> = testUrls.map(
  (url, index) => ({
    id: index++,
    url,
  }),
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#010142] text-gray-500">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-300 sm:text-[5rem]">
          Image <span className="text-[hsl(207,100%,70%)]">Gallery</span> w/{" "}
          <span className="text-[hsl(0,0%,11%)]">NEXT</span>
        </h1>
        <div className="flex flex-wrap gap-1">
          {/* prod */}
          {testImages.map((image) => (
            <div key={image.id}>
              <Image
                src={image.url}
                alt="Image"
                width={450}
                height={450}
              ></Image>
            </div>
          ))}
          {/* for testing */}
          {/* {[...testImages, ...testImages].map((image) => (
            <div key={image.id}>
              <Image
                src={image.url}
                alt="Image"
                width={450}
                height={450}
              ></Image>
            </div>
          ))} */}
        </div>
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div> */}
      </div>
      <footer className="row-start-3 mt-36 flex flex-wrap items-center justify-center mb-9">
        <div>
          <small className="text-gray-500">Built with</small>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              //   className="dark:invert"
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
          {/* <small className="mr-6 text-gray-500">
            &copy; Copyright 12024, ASAI Inc.
          </small> */}
        </div>
      </footer>
    </main>
  );
}
