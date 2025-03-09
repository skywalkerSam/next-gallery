"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { usePostHog } from "posthog-js/react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useAuth, useUser } from "@clerk/nextjs";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        console.warn("PostHog key is missing. Analytics will not be tracked.");
        return;
      }

      // as string
      // posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      //   api_host:
      //     process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      //   person_profiles: "identified_only", // or 'always' to reate profiles for anonymous users as well
      //   capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      // });

      // ad-blocker bypass
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
      });

      // Wrap PostHogPageView in Suspense to avoid the useSearchParams usage above
    } catch (error) {
      console.error("Posthog initialization failed: ", error);
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      <UserIdentificationWrapper>{children}</UserIdentificationWrapper>
    </PHProvider>
  );
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  // Track pageviews
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }

      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

// from de-opting the whole app into client-side rendering
// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

function UserIdentificationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, userInfo]);

  return children;
}
