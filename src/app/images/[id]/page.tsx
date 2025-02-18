// import { getUserImage } from "~/server/queries";
// import { Modal } from "./modal";
// import { FullImageView } from "~/ui/gallery/FullImageView";
// import type { ImageType } from "~/types/ImageType";
import { ImageView } from "~/ui/gallery/ImageView";
// import Image from "next/image";
import { ErrorBoundary } from "@sentry/nextjs";
import { Suspense } from "react";

const centeredDivStyle =
  "flex flex-row start-row-3 items-center justify-center justify-items-end p-3";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const imageId = (await params).id;
  // Typecasting to Number because, thy server expects a Number.)
  const imageIdAsNum = Number(imageId);
  if (Number.isNaN(imageIdAsNum)) throw new Error("Image ID not found!");

  // const image = await getUserImage(imageIdAsNum);
  // const image: ImageType | undefined = await getUserImage(imageIdAsNum);

  // return <Modal>{imageId}</Modal>;

  // return (
  //   <div>
  //     {/* {image && <FullScreenImage expectedImage={image}></FullScreenImage>} */}
  //     {/* { image && <ImageView imageId={imageIdAsNum}></ImageView>} */}
  //     <ImageView imageId={imageIdAsNum}></ImageView>
  //     {/* <FullImageView imageId={imageIdAsNum}></FullImageView> */}
  //   </div>
  // );

  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      {/* <ErrorBoundary fallback={<div>Error loading image</div>}> */}
      <ErrorBoundary
        fallback={
          <div className={centeredDivStyle}>
            {/* <p className="text-6xl text-slate-600">Loading...</p> */}
            <p className="mb-4 border-l border-green-600 p-3 text-slate-400">
              Try refreshing the page or do a hard refresh (CTRL+SHIFT+R.)
            </p>
          </div>
        }
      >
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <Suspense
          fallback={<p className="text-6xl text-slate-600">Loading...</p>}
        > */}
        <Suspense
          fallback={
            <div className={centeredDivStyle}>
              <p className="text-6xl text-slate-600">Loading...</p>
            </div>
          }
        >
          {/* {image && <FullScreenImage expectedImage={image}></FullScreenImage>} */}
          {/* { image && <ImageView imageId={imageIdAsNum}></ImageView>} */}
          <ImageView imageId={imageIdAsNum}></ImageView>
          {/* <FullImageView imageId={imageIdAsNum}></FullImageView> */}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

// Parallel routes (pr) i.e. `images/[id]` must also have the same content except the "Modal"

// export const dynamicParams = false;

// export function generateStaticParams() {
//   const slugs = ["1", "2", "3", "4", "5", "6"];
//   return slugs.map((slug) => ({ id: slug }));
// }

// export default async function ImagePage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const id = (await params).id;
//   return (
//     <div className="flex min-h-screen flex-row items-center justify-center">
//       {id}
//     </div>
//   );
// }

// import { Modal } from "./modal";

// export default async function ImageModal({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const imageId = (await params).id;
//   return <Modal>{imageId}</Modal>;
// }
