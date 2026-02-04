import React from "react";
import "./index.scss";
import { Typewriter } from "react-simple-typewriter";

function Hero_section() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Quang Tuan</h1>
        <h2>
          I'm a{" "}
          <Typewriter
            words={["Fontend-Developer", "Freelancer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>{" "}
        <p className="hero-description">
          I’m a creative Frontend Developer dedicated to crafting high-quality
          web experiences. I enjoy solving problems, optimizing performance, and
          designing intuitive interfaces.
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
