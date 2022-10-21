import { createContext, ParentProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const [imageDataList, setImageData] = createStore<string[]>([]);

const imageDataRepository = {
  getImageDataList(): string[] {
    return imageDataList;
  },

  addImageData(data: string) {
    setImageData([...imageDataList, data]);
  },

  clearImageData() {
    setImageData([]);
  },
};

const ImageDataContext = createContext(imageDataRepository);

export function ImageDataProvider(props: ParentProps) {
  return (
    <ImageDataContext.Provider value={imageDataRepository}>
      {props.children}
    </ImageDataContext.Provider>
  );
}

export function useImageDataRepository() {
  return useContext(ImageDataContext);
}
