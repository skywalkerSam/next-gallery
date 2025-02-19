const centeredDivStyle =
  "flex flex-row min-h-screen justify-center items-center";
const loadingStyle = "h-[475px] w-[475px] animate-pulse bg-slate-900";
const gridStyle = "grid grid-cols-3 gap-3";

// animation
const loadingAnimation = [...Array.from({ length: 9 })].map((_, i) => (
  <div key={i} className={loadingStyle} />
));

export default function GalleryLoading() {
  return (
    <div className={centeredDivStyle}>
      <div className={gridStyle}>{loadingAnimation}</div>
    </div>
  );
}
