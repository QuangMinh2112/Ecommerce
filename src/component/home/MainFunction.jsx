import "../FontAwesome/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./home.css";

const MainFunction = () => {
  return (
    <div className="main-function">
      <div className="main-function-icon">
        <FontAwesomeIcon
          icon="fa-burger"
          style={{ color: "orange" }}
          className="main-icon"
        />
        {"  "}
        <b>BluFood</b>
      </div>
      <div className="main-function-icon">
        <FontAwesomeIcon
          icon="fa-truck-fast"
          style={{ color: "red" }}
          className="main-icon"
        />
        {"  "}
        <b>Mã FreeShip</b>
      </div>
      <div className="main-function-icon">
        <FontAwesomeIcon
          icon="fa-basket-shopping"
          style={{ color: "rgb(50, 171, 192)" }}
          className="main-icon"
        />
        {"  "}
        <b>BluMall</b>
      </div>
      <div className="main-function-icon">
        <FontAwesomeIcon
          icon="fa-earth-asia"
          style={{ color: "rgb(21, 77, 114)" }}
          className="main-icon"
        />
        {"  "}
        <b>BluGlobal</b>
      </div>
    </div>
  );
};

export default MainFunction;
