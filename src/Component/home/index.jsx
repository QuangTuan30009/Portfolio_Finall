import React from "react";
import "./index.scss";
import { Typewriter } from "react-simple-typewriter";
import Coding from "/public/Coding.json";
import Lottie from "lottie-react";
import TextStyle from "../text-style";
function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Quang Tuan</h1>

        <TextStyle>
          {" "}
          <h2>
            I'm a{" "}
            <Typewriter
              words={["Frontend-Developer", "AI Developer", "Freelancer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>{" "}
        </TextStyle>
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
          {/* <img src="avatar.png" alt="Portrait" /> */}
          <Lottie
            animationData={Coding}
            loop={true}
            style={{ width: "480px", height: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
