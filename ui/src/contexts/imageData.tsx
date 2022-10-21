import { createContext, ParentProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const [imageDataList, setImageData] = createStore<string[]>([]);

const existHash: Map<string, boolean> = new Map<string, boolean>();

const imageDataRepository = {
  getImageDataList(): string[] {
    return imageDataList;
  },

  addImageData(data: string) {
    if (existHash.has(data)) return;

    setImageData([...imageDataList, data]);
    existHash.set(data, true);
  },

  clearImageData() {
    setImageData([]);
    existHash.clear();
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
