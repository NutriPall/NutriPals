import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar navbar-expand-md">
      <h3 className="navbar-brand">NutriPals</h3>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarTogglerDemo01">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link className="nav-link" to="/">
            Homepage
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about-us">
            About Us
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/recipes-list">
            Recipe List
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}