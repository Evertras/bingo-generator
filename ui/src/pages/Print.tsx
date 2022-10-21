import { Component, For } from "solid-js";
import BingoCard from "../components/BingoCard";

const Print: Component<{
  count: number;
}> = (props) => {
  const cards: any[] = Array(props.count);

  for (let i = 0; i < props.count; i++) {
    cards.push(<BingoCard />);
  }

  return (
    <For each={cards}>
      {(card, _) => {
        return card;
      }}
    </For>
  );
};

export default Print;
