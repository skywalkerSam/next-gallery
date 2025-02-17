"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* <div className="flex min-h-screen flex-row items-center justify-center p-3">
          <h1 className="text-3xl text-red-600">Something went wrong!</h1>
          <br />
          <button className="pointer" onClick={() => reset()}>
            Try again
          </button>
        </div> */}
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

// "use client"; // Error boundaries must be Client Components

// export default function GlobalError({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }) {
//   console.log(error.message);
//   return (
//     // global-error must include html and body tags
//     <html>
//       <body>
//         <div className="flex min-h-screen flex-row items-center justify-center">
//           <h2 className="text-2xl text-red-400">Something went wrong!</h2>
//           <button className="pointer" onClick={() => reset()}>
//             Try again
//           </button>
//           {/* <NextError statusCode={0} /> */}
//         </div>
//       </body>
//     </html>
//   );
// }
