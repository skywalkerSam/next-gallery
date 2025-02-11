export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      {id}
    </div>
  );
}

// import { Modal } from "./modal";

// export default async function ImageModal({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const imageId = (await params).id;
//   return <Modal>{imageId}</Modal>;
// }
