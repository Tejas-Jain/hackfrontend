import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">Vital Beat</div>
      <div className="nav-content">
        <span className="content-items">Home</span>
        <span className="content-items">Explore</span>
      </div>

      <div className="signin">
        <button className="button-login">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
