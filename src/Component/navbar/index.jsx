import React, { useState } from "react";
import "./index.scss";

function Navbar({ onHome, onAbout, onProject, onContact }) {
  const [dark, setDark] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>Tuan Quang</h2>
        <h3>Frontend Developer</h3>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__list">
          <li onClick={onHome} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li onClick={onAbout} style={{ cursor: "pointer" }}>
            About
          </li>
          <li onClick={onProject} style={{ cursor: "pointer" }}>
            Project
          </li>
          <li onClick={onContact} style={{ cursor: "pointer" }}>
            Skills
          </li>
        </ul>
        <div className="nav-right">
          <button className="theme-but" onClick={() => setDark(!dark)}>
            {dark ? (
              <i className="bi bi-moon"></i>
            ) : (
              <i className="bi bi-brightness-high"></i>
            )}
          </button>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
