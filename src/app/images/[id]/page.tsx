// import { getUserImage } from "~/server/queries";
// import { Modal } from "./modal";
// import { FullImageView } from "~/ui/gallery/FullImageView";
// import type { ImageType } from "~/types/ImageType";
import { ImageView } from "~/ui/gallery/ImageView";
// import Image from "next/image";

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
  return (
    <div>
      {/* {image && <FullScreenImage expectedImage={image}></FullScreenImage>} */}
      {/* { image && <ImageView imageId={imageIdAsNum}></ImageView>} */}
      <ImageView imageId={imageIdAsNum}></ImageView>
      {/* <FullImageView imageId={imageIdAsNum}></FullImageView> */}
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
