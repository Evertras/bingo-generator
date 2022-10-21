import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { A, Routes, Route } from "@solidjs/router";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));

//import logo from "./logo.svg";
import styles from "./App.module.css";
import Print from "./pages/Print";

// <img src={logo} class={styles.logo} alt="logo" />
const App: Component = () => {
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
          <Route element={<Create />} path="/create" />
          <Route element={<Print count={30} />} path="/print" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
