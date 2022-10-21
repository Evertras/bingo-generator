/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { CardDataProvider } from "./contexts/cardData";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <CardDataProvider>
        <App />
      </CardDataProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
