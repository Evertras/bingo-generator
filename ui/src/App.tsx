import type { Component } from "solid-js";
import BingoCard from "./components/BingoCard";

//import logo from "./logo.svg";
import styles from "./App.module.css";

// <img src={logo} class={styles.logo} alt="logo" />
const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <BingoCard
          pictures={[...new Array(25)].map((_, i) => (i + 1).toString())}
        />
      </header>
    </div>
  );
};

export default App;
