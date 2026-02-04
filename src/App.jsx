import "./App.css";
import React, { useRef } from "react";
import Navbar from "./Component/navbar";
import Hero_section from "./Component/hero-section";
import About from "./Component/about";
import Project from "./Component/project";
import Tech_Stack from "./Component/tech-stack";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        onHome={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
        onAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
        onProject={() =>
          projectRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />

      <section ref={homeRef}>
        <Hero_section />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={projectRef}>
        <Project />
      </section>

      <section ref={contactRef}>
        <Tech_Stack />
      </section>
    </div>
  );
}

export default App;
