import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux"
import store from "./Redux/store/store"


import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);