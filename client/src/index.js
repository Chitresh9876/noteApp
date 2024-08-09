import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActiveUserProvider } from "./context/activeuser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ActiveUserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ActiveUserProvider>
);
