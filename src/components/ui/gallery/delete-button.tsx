"use client";

// import { redirect } from "next/navigation";
import { Button } from "../button";
import { useState } from "react";

export function DeleteButton() {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-lg text-destructive">Are you sure?</p>
        <div className="flex gap-2">
          {/* onClick={() => redirect('/gallery')} */}
          <Button type="submit" variant="destructive" size="sm">
            Yes, delete
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setConfirming(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      type="button"
      variant="destructive"
      onClick={() => setConfirming(true)}
    >
      Delete
    </Button>
  );
}

// onSubmit={(e) => {
//   if (!confirm("Are you sure you want to delete this image?")) {
//     e.preventDefault();
//   }
// }}
