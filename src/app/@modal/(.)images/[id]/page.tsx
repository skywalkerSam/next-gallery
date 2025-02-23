// import { getUserImage } from "~/server/queries";
import { Suspense } from "react";
import { Modal } from "./modal";
// import { FullImageView } from "~/ui/gallery/FullImageView";
// import type { ImageType } from "~/types/ImageType";
import { ImageView } from "~/components/ui/gallery/image-view";
// import Image from "next/image";

const centeredDivStyle =
  "flex flex-row start-row-3 items-center justify-center justify-items-end p-3";

export default async function ImageModal(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  const imageId = Number(id);
  if (!Number.isInteger(imageId) || imageId < 1) {
    throw new Error("Invalid image ID");
  }
  //   params,
  // }: {
  //   params: Promise<{ id: string }>;
  // }) {
  //   const imageId = (await params).id;
  //   // Typecasting to Number because, thy server expects a Number.)
  //   const imageIdAsNum = Number(imageId);
  //   if (Number.isNaN(imageIdAsNum))
  //     throw new Error(`Invalid image ID: "${imageId}" is not a number`);
  // if (Number.isNaN(imageIdAsNum)) throw new Error("Image ID not found!");

  // const image = await getUserImage(imageIdAsNum);
  // const image: ImageType | undefined = await getUserImage(imageIdAsNum);

  // return <Modal>{imageId}</Modal>;
  return (
    <div>
      <Modal>
        {/* {image && <FullScreenImage expectedImage={image}></FullScreenImage>} */}
        {/* { image && <ImageView imageId={imageIdAsNum}></ImageView>} */}
        <Suspense
          fallback={
            <div className={centeredDivStyle}>
              <p className="text-6xl text-slate-600">Loading...</p>
            </div>
          }
        >
          <ImageView imageId={imageId}></ImageView>
        </Suspense>
        {/* <FullImageView imageId={imageIdAsNum}></FullImageView> */}
      </Modal>
    </div>
  );
}

// Parallel routes (pr) i.e. `images/[id]` must also have the same content except the "Modal"
