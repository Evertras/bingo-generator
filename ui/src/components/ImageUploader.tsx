import { Component } from "solid-js";
import { useImageDataRepository } from "../contexts/imageData.jsx";

const ImageUploader: Component = () => {
  const imageDataRepository = useImageDataRepository();
  const onChange = (e: any) => {
    const files = e.target.files;
    const numImages = files.length;

    for (let i = 0; i < numImages; i++) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        if (reader.result) {
          const data = reader.result as string;

          imageDataRepository.addImageData(data);
        } else {
          console.error("could not read file");
        }
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
