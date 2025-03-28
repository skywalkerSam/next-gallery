import "server-only";

import { PostHog } from "posthog-node";

export default function PostHogServerClient() {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!posthogKey) {
    throw new Error("PostHog key not found!");
  } else if (!posthogHost) {
    throw new Error("PostHog host not found!");
  }
  const posthogClient = new PostHog(posthogKey, {
    host: posthogHost,
    flushAt: 1,
    flushInterval: 0,
  });
  return posthogClient;
}
