import React from "react";
import "./index.scss";
import TextStyle from "../text-style";

function Project() {
  // Danh sách các projects
  const projects = [
    {
      title: "Weather Prediction Dashboard ",
      description:
        "A weather dashboard that allows users to search for real-time weather information by city. Built with JavaScript and a weather API, the project displays temperature, weather conditions, and icons, focusing on API integration, asynchronous data handling, and data visualization.",
      image: "/project1.png",
      link: "https://github.com/QuangTuan30009/Weather-Prediction-Dashboard",
      isReverse: false,
    },
    {
      title: "Recognise-handwritten-digits",
      description:
        "A machine learning project that recognizes handwritten digits using a trained model. Users can draw digits on a canvas, and the system predicts the number. This project demonstrates basic machine learning concepts, data preprocessing, and applying ML models to real-world applications.",
      image: "/project2.png",
      link: "https://github.com/QuangTuan30009/Recognise-handwritten-digits",
      isReverse: true,
    },
    {
      title: "To-do-list App",
      description:
        "A simple and interactive task management application built with HTML, CSS, and JavaScript. Users can add, complete, and delete tasks. This project demonstrates DOM manipulation, basic state management, and serves as a foundation for learning features like localStorage.",
      image: "/project3.png",
      link: "https://github.com/QuangTuan30009/To-do-list",
      isReverse: false,
    },
    {
      title: "Spotify Clone",
      description:
        "A front-end project that recreates the core UI and user experience of Spotify using HTML, CSS, and JavaScript. The application focuses on building playlist layouts, a music control bar, and basic play/pause interactions, helping strengthen skills in UI design and JavaScript event handling.",
      image: "/project4.png",
      link: "https://github.com/QuangTuan30009/Spotify-clone",
      isReverse: true,
    },
  ];

  return (
    <div className="project-container">
      <div className="project-title">
        My Recent <TextStyle>Works</TextStyle>
      </div>

      {projects.map((project, index) => (
        <section
          key={index}
          className={`project-item ${project.isReverse ? "reverse" : ""}`}
        >
          {/* Phần Ảnh */}
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Phần Nội dung */}
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-touch"
            >
              Github <span></span>
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Project;
