import { Component } from "solid-js";

const ImageUploader: Component<{ setImageUploadCount: (n: number) => void }> = (
  props
) => {
  const onChange = (e: any) => {
    const numImages = e.target.files.length;
    sessionStorage.setItem("imageCount", numImages);
    props.setImageUploadCount(numImages);
  };

  return (
    <div>
      <div>
        <input
          onChange={onChange}
          type="file"
          accept="*.jpg,*.jpeg,*.png,*.gif"
          multiple
        />
      </div>
    </div>
  );
};

export default ImageUploader;
