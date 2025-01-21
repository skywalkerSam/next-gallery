import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

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
