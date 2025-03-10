import { deleteImage, getUserImage } from "~/server/queries";
// import Image from "next/image";
// import type { ImageType } from "~/types/ImageType";
import { Suspense } from "react";
import { clerkClient } from "@clerk/nextjs/server";
import ImageComponent from "./modal-image-component";
// import { Button } from "../button";
import { DeleteButton } from "./delete-button";
import { redirect } from "next/navigation";
// import { NextResponse } from "next/server";

export async function ImageView(props: { imageId: number }) {
  const image = await getUserImage(props.imageId);
  if (!image) {
    throw new Error(`Image not found: ${props.imageId}`);
  }
  const client = await clerkClient();
  const uploaderInfo = await client.users
    .getUser(image.userId)
    // .catch(() => null);
    .catch((error) => {
      console.error("Failed to fetch user info: ", error);
      return { fullName: "Unknown User" };
    });
  // const image: ImageType | undefined = await getUserImage(props.imageId);
  // const client = await clerkClient();
  // const uploaderInfo = image && (await client.users.getUser(image?.userId));
  return (
    <div className="mt-60 flex h-full w-full min-w-0 flex-wrap items-center justify-center p-3 text-gray-400">
      <Suspense fallback={<p>Fetching Image...</p>}>
        <div className="flex flex-shrink items-center justify-center">
          {image && (
            // <Image
            //   src={image.url}
            //   className="object-contain"
            //   alt={image.name}
            //   width={900}
            //   height={900}
            // />
            <ImageComponent image={image}></ImageComponent>
          )}
        </div>
      </Suspense>
      <Suspense fallback={<p>Fetching Metadata...</p>}>
        <div className="ml-6 flex w-48 flex-shrink flex-col border-l border-blue-400 p-3">
          <div className="text-gray-400">
            <div className="mb-6 text-center">
              <a
                className="pointer text-xl text-blue-400 underline hover:grow hover:text-slate-400"
                href={image?.url}
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="mt-3 flex items-center justify-center p-3">
            {/* Server Actions (uses POST) */}
            <form
              action={async () => {
                "use server";
                // This runs only on server
                await deleteImage(props.imageId);
                // redirect("/gallery");

                // NextResponse.redirect("/gallery");
                // await deleteImage(props.imageId).then(() => NextResponse.redirect("/gallery"));

                // await deleteImage(props.imageId).then(() => redirect("/gallery"));

                // Using hardcoded URLs because the relative paths ain't working for some reason...!
                // await deleteImage(props.imageId).then(
                //   redirect("https://next-gallery-blues.vercel.app/gallery"),
                // );
              }}
            >
              <DeleteButton></DeleteButton>
              {/* <Button type="submit" variant={"destructive"}>
                Delete
              </Button> */}
            </form>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
