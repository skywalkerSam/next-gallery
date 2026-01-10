import { ImageView } from "~/app/gallery/_components/ImageView";
import { ErrorBoundary } from "@sentry/nextjs";
import { Suspense } from "react";
// import Image from "next/image";

const centeredDivStyle =
  "flex flex-row start-row-3 items-center justify-center justify-items-end p-4";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const imageId = (await params).id;
  const imageIdAsNum = Number(imageId);
  if (Number.isNaN(imageIdAsNum)) throw new Error("Image ID not found!");

  return (
    <main className="flex flex-row items-center justify-center bg-linear-to-b from-transparent via-gray-500 to-transparent">
      {/* <ErrorBoundary fallback={<div>Error loading image</div>}> */}
      <ErrorBoundary
        fallback={
          <div className={centeredDivStyle}>
            {/* <p className="text-6xl ">Loading...</p> */}
            <p className="mb-4 border-l border-green-500 p-4">
              Try refreshing the page or do a hard refresh (CTRL+SHIFT+R.)
            </p>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className={centeredDivStyle}>
              <p className="text-6xl">⭕</p>
            </div>
          }
        >
          <ImageView imageId={imageIdAsNum}></ImageView>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
