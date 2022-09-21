import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import { Global } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <Home />
  </React.StrictMode>
);
