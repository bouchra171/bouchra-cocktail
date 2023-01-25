import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVtals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = React.creatRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
