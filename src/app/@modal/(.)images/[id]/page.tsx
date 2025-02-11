import { getUserImage } from "~/server/queries";
import { Modal } from "./modal";
import FullScreenImage from "~/ui/FullScreenImage";
import type { imageType } from "~/types/imageType";
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
  const image: imageType | undefined = await getUserImage(imageIdAsNum);

  // return <Modal>{imageId}</Modal>;
  return (
    <div>
      <Modal>
        {image && <FullScreenImage expectedImage={image}></FullScreenImage>}
      </Modal>
    </div>
  );
}
