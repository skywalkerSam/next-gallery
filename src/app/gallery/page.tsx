// import Link from "next/link";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { getUserImages } from "~/server/queries";
// import { db } from "~/server/db";
import CustomUploadButton from "~/ui/CustomUploadButton";

// dynamic behavior
export const dynamic = "force-dynamic";

// // images w/ uploadthing
// const testUrls: string[] = [
//   "https://utfs.io/f/suXlWOYj6P5mlyveTv2FdBCMI6LznvwAF7HrjlGR8kmbJY5K",
//   "https://utfs.io/f/suXlWOYj6P5mgdRzw1a0DF9hfBImAUEWdQ0GqoYgt2Ta1CJr",
//   "https://utfs.io/f/suXlWOYj6P5mfqCcKs26pjHoZscJI1UuBOgFKiEMSa3XGvqx",
//   "https://utfs.io/f/suXlWOYj6P5mFJe8r1mkT4re6FHUXmsdiP1v7bMD5jWBGg0A",
//   "https://utfs.io/f/suXlWOYj6P5mGP0uXcVWCxR45grP3wq2Un6tIcayuhofNY9V",
//   "https://utfs.io/f/suXlWOYj6P5meWD2yG7xj2cVFsz0dw8MHNDSt19mhyQLKigI",
//   "https://utfs.io/f/suXlWOYj6P5mCRCWOshy9hp3d8uf7xJznlReXIsNiM5B12DA",
//   "https://utfs.io/f/suXlWOYj6P5mqtNWj4LMPy9d0NzxhwsMlt8SWb1ojm5pUIEv",
//   "https://utfs.io/f/suXlWOYj6P5mJc0GtgUPtN9DlEFPjdUmXnCsaZ6u01K7LMih",
//   "https://utfs.io/f/suXlWOYj6P5m39Pb8zsJQi4BAbP5WzmlFnh81v9OcNYVtRyZ",
//   "https://utfs.io/f/suXlWOYj6P5m0oRoWEJxwFpHSrVeunNyC7TQMXJsRdzm4bxY",
//   "https://utfs.io/f/suXlWOYj6P5mh0uTBjHLuq3fIbErM1Xl482VAz6H9QYDJgRK",
// ];

// // image IDs
// const testImages: Array<{ id: number; url: string }> = testUrls.map(
//   (url, index) => ({
//     id: index++,
//     url,
//   }),
// );

export default async function Page() {
  // Moved to server
  // const images = await db.query.images.findMany({
  //   orderBy: (order, { asc }) => asc(order.id), // desc, nice.)
  // });
  const images = await getUserImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#212121] to-black text-gray-500">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {/* <h1 className="text-5xl font-extrabold tracking-tight text-gray-300 sm:text-[5rem]">
          Image <span className="text-[hsl(207,100%,70%)]">Gallery</span> w/{" "}
          <span className="text-[hsl(0,0%,11%)]">NEXT</span>
        </h1> */}
        <div className="row-start-1 mt-0 flex flex-wrap items-center justify-center gap-2 p-3">
          {/* prod */}
          {images.map((image) => (
            <div key={image.id}>
              <Image
                src={image.url}
                alt="Image"
                width={475}
                height={475}
              ></Image>
              {/* {image.name} */}
            </div>
          ))}
          {/* for testing */}
          {/* shouldn't have used index as a key but, just to keep thy console clear & '-' to counter weird JS behaviors.) */}
          {/* {images.map((image, i) => (
            <div key={image.id + "-" + i}>
              <Image
                src={image.url}
                alt="Image"
                width={450}
                height={450}
              ></Image>
              {image.name}
            </div>
          ))} */}
          {/* multiple pages test */}
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

        {/* uploadthing image uploads */}
        <CustomUploadButton></CustomUploadButton>

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
    </main>
  );
}
