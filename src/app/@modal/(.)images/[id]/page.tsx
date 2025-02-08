import { getUserImage } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const imageId = (await params).id;
  // Typecasting to Number because, thy server expects a Number.)
  const imageIdAsNum = Number(imageId);
  if (Number.isNaN(imageIdAsNum)) throw new Error("Image ID not found!");

  const image = await getUserImage(imageIdAsNum);

  // return <Modal>{imageId}</Modal>;
  return (
    <div>
      <Modal>
        <div className="flex flex-row min-h-screen justify-center items-center">
        <Image
          src={image?.url ?? ""}
          alt={image?.name ?? ""}
          width={900}
          height={900}
        ></Image>
        </div>
      </Modal>
    </div>
  );
}
