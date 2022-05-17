import React from "react";
import ReactDOM from "react-dom/client";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/dist/rsuite.min.css'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
