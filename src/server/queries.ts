import "server-only";
import { db } from "./db";

export async function getUserImages() {
  const images = await db.query.images.findMany({
    orderBy: (order, { asc }) => asc(order.id), // desc, nice.)
  });
  return images;
}
