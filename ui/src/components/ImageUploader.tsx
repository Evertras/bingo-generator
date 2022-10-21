import { Component } from "solid-js";

const ImageUploader: Component<{
  setImageUploadCount: (n: number) => void;
  setImageUploadCompletedCount: (f: (n: number) => number) => void;
}> = (props) => {
  const onChange = (e: any) => {
    const files = e.target.files;
    const numImages = files.length;
    sessionStorage.setItem("imageCount", numImages);
    props.setImageUploadCompletedCount((_) => 0);
    props.setImageUploadCount(numImages);

    for (let i = 0; i < numImages; i++) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        sessionStorage.setItem(`img_${i}`, reader.result as string);

        props.setImageUploadCompletedCount((c: number) => c + 1);
      });

      reader.readAsDataURL(files[i]);
    }
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
