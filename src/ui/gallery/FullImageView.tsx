import { getUserImage } from "~/server/queries";
// import Image from "next/image";
import type { ImageType } from "~/types/ImageType";

const PLACEHOLDER_IMAGE = "/starboy-logo.png";
// const PLACEHOLDER_IMAGE = "https://github.com/skywalkerSam";

export async function FullImageView(props: { imageId: number }) {
  const image: ImageType | undefined = await getUserImage(props.imageId);
  if (!image) {
    return (
      <div className="flex min-h-screen flex-row items-center justify-center">
        <p>Image not found</p>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <img
        src={image.url}
        alt={image.name}
        // placeholder image
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER_IMAGE;
        }}
      />
    </div>
  );
  // return (
  //   // looking for these specific tailwind classes to center a div never gets old.)
  //   <div className="flex min-h-screen flex-row items-center justify-center">
  //     {/* no use for Image component for this is a full screen image.) */}
  //     {image && <img src={image.url} alt={image.name}></img>}
  //   </div>
  // );
}

// // import Image from "next/image";
// import type { ImageType } from "~/types/ImageType";

// export default function FullScreenImage({
//   expectedImage,
// }: {
//   expectedImage: ImageType;
// }) {
//   return (
//     // looking for these specific tailwind classes to center a div never gets old.)
//     <div className="flex min-h-screen flex-row items-center justify-center">
//       {/* no use for Image component for this is a full screen image.) */}
//       <img
//         // key={image?.id ?? ""}
//         src={expectedImage?.url ?? ""}
//         alt={expectedImage?.name ?? ""}
//         // width={900}
//         // height={900}
//       ></img>
//     </div>
//   );
// }
