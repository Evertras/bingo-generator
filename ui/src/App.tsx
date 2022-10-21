import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { createStore } from "solid-js/store";
import { A, Routes, Route } from "@solidjs/router";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));

//import logo from "./logo.svg";
import styles from "./App.module.css";

// <img src={logo} class={styles.logo} alt="logo" />
const App: Component = () => {
  const [imageDataStore, setImageDataStore] = createStore<string[]>([]);

  return (
    <div class={styles.App}>
      <header class={styles.header}>Bingo Generator</header>
      <nav class={styles.nav}>
        <A href="/">Home</A>
        <A href="/create">Create</A>
      </nav>
      <div class={styles.main}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={
              <Create
                imageDataStore={imageDataStore}
                setImageDataStore={setImageDataStore}
              />
            }
            path="/create"
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
