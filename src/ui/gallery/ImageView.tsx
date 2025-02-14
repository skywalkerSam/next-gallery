import { getUserImage } from "~/server/queries";
import Image from "next/image";
import type { imageType } from "~/types/imageType";

export async function ImageView(props: { imageId: number }) {
  const image: imageType | undefined = await getUserImage(props.imageId);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        {image && (
          <Image
            src={image.url}
            className="object-contain"
            alt={image.name}
            width={900}
            height={900}
          />
        )}
      </div>
    </div>
  );
}
