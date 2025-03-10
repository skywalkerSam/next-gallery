import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import PostHogServerClient from "./analytics";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { NextResponse } from "next/server";

/**
 * Retrieves all images associated with the authenticated user.
 *
 * This asynchronous function uses the auth() utility to validate the user's identity.
 * If a valid user ID is found, it queries the database to fetch all images that match
 * the user's ID and returns them sorted in ascending order by image ID.
 *
 * @returns A promise that resolves to an array of images associated with the authenticated user.
 *
 * @throws Error if the user is not authenticated (i.e., no valid user ID is found), with the message "User not found!".
 */
export async function getUserImages() {
  // using auth() for userId validation
  const user = await auth();

  if (user.userId) {
    const images = await db.query.images.findMany({
      // filter
      where: (model, { eq }) => eq(model.userId, user.userId),
      orderBy: (model, { asc }) => asc(model.id), // desc, nice.)
    });
    return images;
  } else {
    throw new Error("User not found!");
  }
}

/**
 * Retrieves a specific image for the authenticated user.
 *
 * This asynchronous function first validates the user's identity by calling the
 * `auth()` function. If the user is authenticated (i.e., `user.userId` exists),
 * it queries the database to find the first image with the specified id. If no
 * authenticated user is found, the function throws an error with the message "User not found!".
 *
 * @param id - The unique identifier of the image to retrieve.
 * @returns A promise that resolves with the image object if found, or null if no matching image exists.
 * @throws Error if the user is not authenticated.
 * @beta
 * @todo implement caching
 */
export async function getUserImage(id: number) {
  if (!Number.isInteger(id) || id < 1) {
    throw new Error("Invalid image ID");
  }

  // using auth() for userId validation
  const user = await auth();

  if (user.userId) {
    const image = await db.query.images.findFirst({
      // filter
      where: (model, { and, eq }) =>
        and(eq(model.id, id), eq(model.userId, user.userId)),
      // where: (model, { eq }) => eq(model.id, id),
      // orderBy: (model, { asc }) => asc(model.id), // desc, nice.)
    });
    return image;
  } else {
    throw new Error("User not found!");
  }
}

/**
 * Deletes an image w/ Server Actions
 *
 * This function is a placeholder for image deletion functionality and is currently not implemented.
 *
 * @remarks
 * In future iterations, this function should include logic to:
 * - Validate user authentication.
 * - Verify the existence of the image in the database.
 * - Execute the necessary database operations to remove the image.
 *
 * @beta
 */
export async function deleteImage(id: number) {
  if (!Number.isInteger(id) || id < 1) {
    throw new Error("Invalid image ID!");
  }

  // using auth() for userId validation
  const user = await auth();

  // delete query
  if (user?.userId) {
    await db
      .delete(images)
      .where(and(eq(images?.id, id), eq(images?.userId, user?.userId)))
      .returning({ imageId: images?.id });

    // PostHog Analytics: Delete Image
    PostHogServerClient().capture({
      distinctId: user.userId,
      event: "deleteImage()",
      properties: {
        imageId: id,
        userId: user.userId,
      },
    });

    revalidatePath("/gallery");
    redirect("/gallery");

    // Redirects ain't working for some reason...!

    // NextResponse.redirect("https://next-gallery-blues.vercel.app/gallery");
    // NextResponse.rewrite(new URL('/gallery'))

    // redirect("/gallery");
  } else {
    throw new Error("User not found!");
  }
}

// NOTE: Use `taint` to keep sensitive things like tokens away from the client.
// NOTE: use closure patterns!
