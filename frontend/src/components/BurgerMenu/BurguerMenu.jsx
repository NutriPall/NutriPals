import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar navbar-expand-md bg-light">
      <h3 className="navbar-brand">NutriPals</h3>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarTogglerDemo01">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}