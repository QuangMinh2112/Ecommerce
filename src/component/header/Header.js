import "../FontAwesome/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-user">
        <div>
          <img
            src="https://i.ibb.co/6DpVWfp/Capture.png"
            alt="logo"
            width="80"
          />
        </div>
        <FontAwesomeIcon
          icon="fa-circle-user"
          style={{ color: "white" }}
          className="header-style"
        />
        <p style={{ color: "white" }}>User</p>
      </div>
      <hr style={{ color: "white" }} />
      <div className="header-action">
        <FontAwesomeIcon
          icon="fa-house"
          style={{ color: "white" }}
          className="header-style"
        />
        <FontAwesomeIcon
          icon="fa-magnifying-glass"
          style={{ color: "white" }}
          className="header-style"
        />
        <FontAwesomeIcon
          icon="fa-cart-shopping"
          style={{ color: "white" }}
          className="header-style"
        />
        <FontAwesomeIcon
          icon="fa-heart"
          style={{ color: "white" }}
          className="header-style"
        />
      </div>
      <hr style={{ color: "white" }} />
      <div className="header-menu">
        <FontAwesomeIcon
          icon="fa-bars"
          style={{ color: "white" }}
          className="header-style"
        />
        <FontAwesomeIcon
          icon="fa-bell"
          style={{ color: "white" }}
          className="header-style"
        />
      </div>
    </div>
  );
};

export default Header;
