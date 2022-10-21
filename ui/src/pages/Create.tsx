import { Component, Match, Switch } from "solid-js";
import BingoCard from "../components/BingoCard";
import ImageUploader from "../components/ImageUploader";
import SizeSelector from "../components/SizeSelector";
import { useCardDataRepository } from "../contexts/cardData";

const Create: Component = () => {
  const cardDataRepository = useCardDataRepository();

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Switch>
        <Match when={cardDataRepository.getCardSize() === 0}>
          <SizeSelector />
        </Match>
        <Match when={cardDataRepository.getCardSize() !== 0}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                padding: "10px",
              }}
            >
              <h1>
                {cardDataRepository.getCardSize()} x{" "}
                {cardDataRepository.getCardSize}
              </h1>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => cardDataRepository.setCardSize(0)}
              >
                Change Size
              </div>
              <div
                style={{
                  margin: "20px",
                }}
              >
                <BingoCard />
              </div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              <ImageUploader />
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Create;
