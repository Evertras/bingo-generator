import { createContext, createSignal, ParentProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const [imageDataList, setImageData] = createStore<string[]>([]);
const [cardSize, setCardSize] = createSignal(0);

const existHash: Map<string, boolean> = new Map<string, boolean>();

const cardDataRepository = {
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

  getCardSize(): number {
    return cardSize();
  },

  getTotalSquares(): number {
    return cardSize() * cardSize();
  },

  setCardSize(size: number) {
    setCardSize(size);
  },
};

const CardDataContext = createContext(cardDataRepository);

export function CardDataProvider(props: ParentProps) {
  return (
    <CardDataContext.Provider value={cardDataRepository}>
      {props.children}
    </CardDataContext.Provider>
  );
}

export function useCardDataRepository() {
  return useContext(CardDataContext);
}
