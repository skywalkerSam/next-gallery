import { getUserImage } from "~/server/queries";
import Image from "next/image";
import type { imageType } from "~/types/imageType";
import { Suspense } from "react";
import { clerkClient } from "@clerk/nextjs/server";

export async function ImageView(props: { imageId: number }) {
  const image: imageType | undefined = await getUserImage(props.imageId);
  const client = await clerkClient();
  const uploaderInfo = image && await client.users.getUser(image?.userId);
  return (
    <div className="mt-60 flex h-full w-full min-w-0 items-center justify-center p-3 text-gray-400">
      <Suspense fallback={<p>Fetching Image...</p>}>
        <div className="flex flex-shrink items-center justify-center">
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
      </Suspense>
      <Suspense fallback={<p>Fetching Metadata...</p>}>
        <div className="ml-6 flex w-48 flex-shrink flex-col border-l border-sky-400 p-3">
          <div className="text-gray-400">
            <div className="mb-6 text-center">
              <a
                className="pointer text-xl underline hover:grow hover:text-sky-400"
                href={image?.url}
                target="_blank"
              >
                Image Overview
              </a>
            </div>
            <div className="mb-3">
              <p>File Name: {image?.name}</p>
            </div>
            <div className="mb-3">
              <p>Uploaded On: {image?.createdAt.toDateString()}</p>
              {/* <p>Uploaded At: {new Date(image?.createdAt).toLocaleString()}</p> */}
              {/* <p>Uploaded At: {new Date(image?.createdAt).toLocaleDateString()}</p> */}
              {/* <p>Uploaded At: {new Date(image?.createdAt).toLocaleTimeString()}</p> */}
            </div>
            <div className="mb-3">
              <p>Uploaded By: {uploaderInfo?.fullName}</p>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
