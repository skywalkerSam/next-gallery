"use client";

const nextStyle = "flex flex-wrap tracking-tighter text-6xl text-gray-400 hover:text-slate-600 hover:underline";
const jsStyle = "text-2xl tracking-tight";

export default function NextLogo(): JSX.Element {
  return (
    <span className={nextStyle}>
      {/* <span className="flex flex-wrap tracking-tighter text-6xl text-slate-900"> */}
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        NEXT<span className={jsStyle}>.JS</span>
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
