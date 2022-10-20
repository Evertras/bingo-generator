import type { Component } from "solid-js";
import BingoCard from "../components/BingoCard";

const BingoGenerator: Component = () => {
  return (
    <div>
      <BingoCard
        pictures={new Array(24).fill(
          "https://api.lorem.space/image/drink?w=200&h=150"
        )}
      />
    </div>
  );
};

export default BingoGenerator;
