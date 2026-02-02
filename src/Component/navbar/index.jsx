import React, { useState } from "react";
import "./index.scss";
function Header() {
  const [dark, setDark] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>Tuan Quang</h2>
        <h3>Fontend Developer</h3>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__list">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Skills</li>
        </ul>
        <div className="nav-right">
          <button className="theme-but" onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
