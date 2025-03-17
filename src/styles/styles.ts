export const centeredDivStyle =
  "flex flex-row min-h-screen justify-center items-center";

// layout.tsx
export const layoutStyles = {
  centeredDiv: centeredDivStyle,
  centeredDivTitleStyle:
    "flex flex-row min-h-screen justify-center items-center m-24",
  layoutStyle: "grid h-screen grid-rows-[auto,1fr]",
} as const;

// /gallery
export const galleryStyles = {
  centeredDiv: centeredDivStyle,
  loading: "h-[475px] w-[475px] animate-pulse bg-slate-900",
  grid: "grid grid-cols-3 gap-3",
  gradiantBackground: "bg-gradient-to-b from-blue-950 to-black",
} as const;

// PWA-specific styles
export const pwaStyles = {
  offlineIndicator: "bg-amber-500 text-white px-2 py-1 rounded text-sm",
  installPrompt:
    "fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg",
} as const;
