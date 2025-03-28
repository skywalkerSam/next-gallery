"use server";

import webpush from "web-push";
import type { PushSubscription } from "web-push";

webpush.setVapidDetails(
  // "mailto:skywalkersam.dev@gmail.com",
  `mailto:${process.env.CONTACT_EMAIL ?? "skywalkersam.dev@gmail.com"}`,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "",
  process.env.VAPID_PRIVATE_KEY ?? "",
);

// Validate required environment variables
function validateEnvVars() {
  const requiredVars = ["NEXT_PUBLIC_VAPID_PUBLIC_KEY", "VAPID_PRIVATE_KEY"];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`,
    );
  }
}

validateEnvVars();

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  // subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  // return { success: true };
  try {
    // Store in-memory for development
    subscription = sub;

    // TODO: Uncomment for production
    // await db.subscriptions.create({
    //   data: {
    //     endpoint: sub.endpoint,
    //     keys: JSON.stringify(sub.keys),
    //     createdAt: new Date()
    //   }
    // });

    return { success: true };
  } catch (error) {
    console.error("Error subscribing user:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe",
    };
  }
}

export async function unsubscribeUser() {
  try {
    subscription = null;
    // In a production environment, you would want to remove the subscription from the database
    // For example: await db.subscriptions.delete({ where: { ... } })
    return { success: true };
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to unsubscribe",
    };
  }
}

// export async function sendNotification(message: string) {
export async function sendNotification(
  message: string,
  title = "Test Notification",
) {
  if (!message.trim()) {
    return { success: false, error: "Notification message cannot be empty" };
  }

  if (!subscription) {
    // throw new Error("No subscription available");
    return { success: false, error: "No subscription available" };
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        // title: "Test Notification",
        title: title,
        body: message,
        icon: "/icon.svg",
        badge: "web-app-manifest-192x192.png",
        timestamp: Date.now(),
      }),
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    // return { success: false, error: "Failed to send notification" };
    return {
      success: false,
      error:
        error instanceof Error
          ? `Failed to send notification: ${error.message}`
          : "Failed to send notification",
    };
  }
}
