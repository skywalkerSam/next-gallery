"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

/**
 * Converts a URL-safe base64 string to a Uint8Array.
 * @param base64String The base64 string to convert.
 * @returns A Uint8Array containing the raw bytes of the base64 string.
 */
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Manages push notifications by handling service worker registration and push subscription.
 * Provides UI for subscribing/unsubscribing to push notifications and sending test notifications.
 * Displays appropriate messages based on the browser's support for push notifications.
 */
export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Registers the service worker from the specified file and sets up the push subscription.
   * If a subscription already exists, it is retrieved and set in the state.
   * The service worker is registered with no cache update for the given scope.
   */
  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });
      const sub = await registration.pushManager.getSubscription();
      setSubscription(sub);
    } catch (err) {
      console.error("Failed to register service worker:", err);
      setError("Failed to register service worker");
    }
  }

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      await registerServiceWorker();
    }
  }, []);

  async function subscribeToPush() {
    setLoading(true);
    setError(null);
    try {
      const registration = await navigator.serviceWorker.ready;
      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!vapidKey) {
        throw new Error("VAPID key is not configured");
      }
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        // applicationServerKey: urlBase64ToUint8Array(
        //   process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        // ),
        applicationServerKey: urlBase64ToUint8Array(vapidKey),
      });
      setSubscription(sub);
      const serializedSub = JSON.parse(JSON.stringify(sub)) as PushSubscription;
      await subscribeUser(serializedSub);
    } catch (err) {
      console.error("Failed to subscribe:", err);
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setLoading(false);
    }
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <h3>Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendTestNotification}>Send Test</button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button onClick={subscribeToPush}>Subscribe</button>
        </>
      )}
    </div>
  );
}

/**
 * @function InstallPrompt
 * @description This component will display an "Install App" prompt on
 * mobile devices that are not already in standalone mode. On iOS devices, it
 * will display a message explaining how to install the app. Otherwise, it will
 * display a button to trigger the browser's install prompt.
 * @returns {JSX.Element} The rendered component.
 */
export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    setIsIOS(
      // /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window),
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Handle the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
    };

    window.addEventListener(
      "beforeinstallprompt",
      // handleBeforeInstallPrompt as any,
      handleBeforeInstallPrompt as EventListener,
    );

    // unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        // handleBeforeInstallPrompt as any,
        handleBeforeInstallPrompt as EventListener,
      );
    };
  }, []);

  /**
   * Trigger the install prompt.
   *
   * This function will show the install prompt, wait for the user to respond,
   * and then log the outcome of the prompt to the console. The deferred prompt
   * is then discarded, as we have used it and can't use it again.
   */
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
  };

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div>
      <h3>Install App</h3>
      {/* <button>Add to Home Screen</button> */}
      <button onClick={handleInstallClick} disabled={isIOS || !deferredPrompt}>
        Add to Home Screen
      </button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </span>
          and then Add to Home Screen
          <span role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </span>
          .
        </p>
      )}
    </div>
  );
}
