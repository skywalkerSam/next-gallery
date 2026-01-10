const loadingAnimation = [...Array.from({ length: 9 })].map((_, i) => (
  <div key={i} className={"h-[475px] w-[475px] animate-pulse"} />
));

export default function GalleryLoading() {
  return (
    <div className={"flex min-h-screen items-center justify-center"}>
      <div className={"grid grid-cols-3 gap-4"}>{loadingAnimation}</div>
    </div>
  );
}
