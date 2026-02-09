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
        <div className="tech-skills">
          <p>React</p>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>Python</p>
        </div>
        <div className="hero-buttons">
          <a
            href="https://www.facebook.com/quangtuan.ta.507"
            target="_blank"
            className="btn btn-primary"
          >
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://github.com/QuangTuan30009"
            target="_blank"
            className="btn btn-primary"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="www.linkedin.com/in/quang-tuấn-791a69303"
            target="_blank"
            className="btn btn-primary"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/bacxiuda.20"
            target="_blank"
            className="btn btn-primary"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="image-wrapper">
          {/* <img src="avatar.png" alt="Portrait" /> */}
          <Lottie
            animationData={Coding}
            loop={true}
            // style={{ width: "480px", height: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
