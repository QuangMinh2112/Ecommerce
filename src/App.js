import "./App.css";
import { useState } from "react";
import Sider from "./components/Sider.js";
import Main from "./components/Main.js";
import Cart from "./components/Cart.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <div className="Layout App">
      {/* <Sider />
      <Main /> */}
      <Profile />
    </div>
  );
}

export default App;
