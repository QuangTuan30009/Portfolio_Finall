import React from "react";
import "./index.scss";
function Hero_section() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="hero-greeting">Hi, my name is</span>
        <h1 className="hero-name">Quang Tuan</h1>
        <h2 className="hero-title">I'm a Front-End Developer</h2>
        <p className="hero-description">
          specializing in building 
          exceptional digital experiences using ReactJS.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Check my work</button>
          <button className="btn btn-secondary">Contact me</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="image-wrapper">
          <img src="avatar.png" alt="Portrait" />
        </div>
      </div>
    </div>
  );
}

export default Hero_section;
