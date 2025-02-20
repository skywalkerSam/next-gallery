import { galleryStyles } from "~/styles/styles";
// animation
const loadingAnimation = [...Array.from({ length: 9 })].map((_, i) => (
  <div key={i} className={galleryStyles.loading} />
));

export default function GalleryLoading() {
  return (
    <div className={galleryStyles.centeredDiv}>
      <div className={galleryStyles.grid}>{loadingAnimation}</div>
    </div>
  );
}
