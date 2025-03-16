export const centeredDivStyle =
  "flex flex-row min-h-screen justify-center items-center";

// layout.tsx
export const layoutStyles = {
  centeredDiv: centeredDivStyle,
  centeredDivTitleStyle:
    "flex flex-row min-h-screen justify-center items-center m-24",
  layoutStyle: "grid h-screen grid-rows-[auto,1fr]",
} as const;

// /gallery/
export const galleryStyles = {
  centeredDiv: centeredDivStyle,
  loading: "h-[475px] w-[475px] animate-pulse bg-slate-900",
  grid: "grid grid-cols-3 gap-3",
  gradiantBackground: "bg-gradient-to-b from-blue-950 to-black",
} as const;
