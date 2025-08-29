// src/main.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "flowbite";
import { store, persistor } from "@/redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
