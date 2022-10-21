import { Component, createEffect, createSignal, Match, Switch } from "solid-js";
import { SetStoreFunction, Store } from "solid-js/store";
import BingoCard from "../components/BingoCard";
import ImageUploader from "../components/ImageUploader";
import SizeSelector from "../components/SizeSelector";

const Create: Component<{
  imageDataStore: Store<string[]>;
  setImageDataStore: SetStoreFunction<string[]>;
}> = (props) => {
  const [size, setSize] = createSignal(0);
  const totalImages = () => size() * size();

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Switch>
        <Match when={size() === 0}>
          <SizeSelector setSize={(s: number) => setSize(s)} />
        </Match>
        <Match when={size() !== 0}>
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
                {size()} x {size()}
              </h1>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setSize(0)}
              >
                Change Size
              </div>
              <div
                style={{
                  margin: "20px",
                }}
              >
                <BingoCard totalImages={totalImages()} />
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
