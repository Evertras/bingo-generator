import { Component, createEffect, createSignal, Match, Switch } from "solid-js";
import BingoCard from "../components/BingoCard";
import ImageUploader from "../components/ImageUploader";
import SizeSelector from "../components/SizeSelector";

const BingoGenerator: Component = () => {
  const [size, setSize] = createSignal(4);
  const totalImages = () => size() * size();

  const cachedImageCountStr: string | null =
    sessionStorage.getItem("imageCount");
  const cachedImageCount: number =
    cachedImageCountStr === null ? 0 : parseInt(cachedImageCountStr, 10);

  const [imageUploadedCount, setImageUploadedCount] = createSignal(
    cachedImageCount,
    { equals: false }
  );

  const getUrls = (count: number, imgs: number) => {
    const images = [...new Array(count)].map(
      (i) =>
        sessionStorage.getItem(`img_${i}`) ||
        "https://api.lorem.space/image/drink?w=200&h=150"
    );

    for (let i = count; i < imgs; i++) {
      images.push("https://api.lorem.space/image/car?w=200&h=150");
    }

    return images;
  };

  const imageUrls = () => getUrls(imageUploadedCount(), totalImages());

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
              <BingoCard pictures={imageUrls()} />
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              <ImageUploader setImageUploadCount={setImageUploadedCount} />
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default BingoGenerator;
