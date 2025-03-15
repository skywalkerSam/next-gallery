import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { createElement } from "react";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "icon.svg"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      createElement("img", { src: { logoSrc }, height: 100 }),
    ),
  );
}
