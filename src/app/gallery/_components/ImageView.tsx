import { deleteImage, getUserImage } from "~/server/queries";
import { Suspense } from "react";
import { clerkClient } from "@clerk/nextjs/server";
import ImageComponent from "./ImageComponent";
import { DeleteButton } from "./DeleteButton";

export async function ImageView(props: { imageId: number }) {
  const image = await getUserImage(props.imageId);
  if (!image) {
    throw new Error(`image not found: ${props.imageId}`);
  }
  const client = await clerkClient();
  const uploaderInfo = await client.users
    .getUser(image.userId)
    // .catch(() => null);
    .catch((error) => {
      console.error("Failed to fetch user info: ", error);
      return { fullName: "Unknown User" };
    });

  return (
    <div className="mt-60 flex h-full w-full min-w-0 flex-wrap items-center justify-center p-4">
      <Suspense fallback={<p>Fetching Image...</p>}>
        <div className="flex shrink items-center justify-center">
          {image && <ImageComponent image={image}></ImageComponent>}
        </div>
      </Suspense>
      <Suspense fallback={<p>Fetching Metadata...</p>}>
        <div className="border-primary ml-6 flex w-48 shrink flex-col border-l p-4">
          <div className="">
            <div className="mb-6 text-center">
              <a
                className="pointer hover:text-primary text-xl hover:grow hover:cursor-pointer hover:underline"
                href={image?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Overview
              </a>
            </div>
            <div className="mb-2">
              <p>File: {image?.name}</p>
            </div>
            <div className="mb-2">
              <p>Uploaded: {image?.createdAt.toDateString()}</p>
              {/* <p>Uploaded: {new Date(image?.createdAt).toLocaleString()}</p> */}
              {/* <p>Uploaded: {new Date(image?.createdAt).toLocaleDateString()}</p> */}
              {/* <p>Uploaded: {new Date(image?.createdAt).toLocaleTimeString()}</p> */}
            </div>
            <div className="mb-2">
              <p>Author: {uploaderInfo?.fullName}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center p-4">
            {/* Server Actions */}
            <form
              action={async () => {
                "use server";
                await deleteImage(props.imageId);
              }}
            >
              <DeleteButton></DeleteButton>
            </form>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
