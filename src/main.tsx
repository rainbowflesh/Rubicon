import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages";
import "./styles/styles.css";
import "@sakun/system.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
