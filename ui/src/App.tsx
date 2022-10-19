import type { Component } from "solid-js";
import BingoCard from "./components/BingoCard";

//import logo from "./logo.svg";
import styles from "./App.module.css";

// <img src={logo} class={styles.logo} alt="logo" />
const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Bingo Generator</header>
      <BingoCard
        pictures={new Array(25).fill(
          "https://api.lorem.space/image/drink?w=200&h=150"
        )}
      />
    </div>
  );
};

export default App;
