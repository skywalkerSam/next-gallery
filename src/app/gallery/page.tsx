import Link from "next/link";
import Image from "next/image";
import { getUserImages } from "~/server/queries";
// import ImageUploadButton from "~/components/ui/gallery/default-upload-button";

// dynamic behavior
export const dynamic = "force-dynamic";

export default async function Page() {
  const images = await getUserImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-transparent via-gray-500 to-transparent">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="row-start-1 mt-0 flex flex-wrap items-center justify-center gap-2 p-4">
          {images.map((image) => (
            <div key={image.id}>
              <Link
                className="card"
                key={image.id}
                href={`/gallery/images/${image.id}`}
                passHref
              >
                <Image
                  src={image.url}
                  alt={image.name}
                  width={475}
                  height={475}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                ></Image>
                {/* {image.name} */}
              </Link>
            </div>
          ))}
        </div>

        {/* uploadthing image uploads */}
        {/* <ImageUploadButton></ImageUploadButton> */}
      </div>
    </main>
  );
}

// NOTE: Opt out of image optimization for images < 1KB, SVGs, or GIFs as they don't get the benefits.)
