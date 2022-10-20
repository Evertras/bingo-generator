import { Component, createSignal, Match, Switch } from "solid-js";
import BingoCard from "../components/BingoCard";
import SizeSelector from "../components/SizeSelector";

const BingoGenerator: Component = () => {
  const [size, setSize] = createSignal(0);
  const totalImages = () => size() * size();

  return (
    <div>
      <Switch>
        <Match when={size() === 0}>
          <SizeSelector setSize={(s: number) => setSize(s)} />
        </Match>
        <Match when={size() !== 0}>
          <BingoCard
            pictures={new Array(totalImages()).fill(
              "https://api.lorem.space/image/drink?w=200&h=150"
            )}
          />
        </Match>
      </Switch>
    </div>
  );
};

export default BingoGenerator;
