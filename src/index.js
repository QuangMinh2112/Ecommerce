import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./assets/fonts/outfit/Outfit-Bold.ttf";
import "./assets/fonts/outfit/Outfit-Light.ttf";
import "./assets/fonts/outfit/Outfit-Regular.ttf";
import "./assets/fonts/din-pro-cond/DINProCond-Black.ttf";
import "./assets/fonts/din-pro-cond/DINProCond-Extlight.ttf";
import "./assets/fonts/google-sans/GoogleSans-Bold.ttf";
import "./assets/fonts/google-sans/GoogleSans-Medium.ttf";
import "./assets/fonts/google-sans/GoogleSans-Regular.ttf";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
