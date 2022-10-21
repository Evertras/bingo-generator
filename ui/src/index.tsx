/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { ImageDataProvider } from "./contexts/imageData";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <ImageDataProvider>
        <App />
      </ImageDataProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
