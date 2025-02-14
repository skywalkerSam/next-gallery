import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

// use closures pattern

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

export async function getUserImage(id: number) {
  // using auth() for userId validation
  const user = await auth();

  if (user.userId) {
    const images = await db.query.images.findFirst({
      // filter
      where: (model, { eq }) => eq(model.id, id),
      // orderBy: (model, { asc }) => asc(model.id), // desc, nice.)
    });
    return images;
  } else {
    throw new Error("User not found!");
  }
}

export async function deleteImage() {
  //
}

// NOTE: Use `taint` to keep sensitive things like tokens away from the client.
