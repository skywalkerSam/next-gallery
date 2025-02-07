import { Modal } from "./modal";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const imageId = (await params).id;
  return <Modal>{imageId}</Modal>;
}
