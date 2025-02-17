"use client";

export default function NextLogo() {
  return (
    <span className="flex flex-wrap tracking-tighter text-6xl text-slate-900">
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        NEXT<span className="text-2xl tracking-tight">.JS</span>
        {/* <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={240}
              height={80}
              priority
            /> */}
      </a>
    </span>
  );
}
