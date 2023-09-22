"use client";

import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publidId, setPublicId] = useState("");

  return (
    <>
      {publidId && (
        <CldImage src={publidId} width={270} height={207} alt="cup of coffee" />
      )}
      <CldUploadWidget
        uploadPreset="vwgtyfua"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
