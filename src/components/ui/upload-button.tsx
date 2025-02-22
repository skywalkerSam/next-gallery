"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import UploadIcon from "./svg/upload-svg";
import { toast } from "sonner";
import LoadingSVG from "~/components/ui/svg/loading-svg";

const uploadIconStyle = "cursor-pointer hover:text-slate-600";
// const uploadIconFocusStyle =
//   "focus:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 active:text-slate-600";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      //   multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export default function UploadButton() {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      // const toastId = toast.info("Uploading...");
      toast.info("Uploading...", {
        duration: 10000,
        id: "upload-info",
        icon: <LoadingSVG></LoadingSVG>,
      });
    },
    onClientUploadComplete() {
      // toast.dismiss(toastId);
      toast.dismiss("upload-info");
      // toast.dismiss();
      toast.success("Upload Complete.", {
        duration: 5000,
      });
      router.refresh();
    },
  });

  return (
    <div>
      <label
        htmlFor="upload-button"
        aria-label="Upload button"
        className={uploadIconStyle}
      >
        {/* Upload */}
        <UploadIcon></UploadIcon>
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      ></input>
      {/* <button aria-label="Upload images">
                Upload
            </button> */}
    </div>
  );
}
