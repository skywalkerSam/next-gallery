"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    // const currentDialog = dialogRef.current;
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    // return () => {
    //   currentDialog?.close();
    // };
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        ref={dialogRef}
        className="modal h-screen w-screen bg-black/90"
        onClose={onDismiss}
        aria-modal="true"
      >
        {children}
        <button
          onClick={onDismiss}
          className="close-button"
          aria-label="Close modal"
        />
      </dialog>
    </div>,
    // document.getElementById("modal-root") ?? document.body,
    (() => {
      const target = document.getElementById("modal-root");
      if (!target) {
        console.warn(
          "Modal root element not found, falling back to document.body",
        );
        return document.body;
      }
      return target;
    })(),
  );
}
