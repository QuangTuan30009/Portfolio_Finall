import React from "react";
import "./index.scss";
import TextStyle from "../text-style";

function Project() {
  // Danh sách các projects
  const projects = [
    {
      title: "Weather Prediction Dashboard ",
      description:
        "This is a description of project 1. It showcases innovative solutions and cutting-edge technology.",
      image: "/project1.png",
      isReverse: false,
    },
    {
      title: "Recognise-handwritten-digits",
      description:
        "This is a description of project 2. A comprehensive platform built with modern frameworks.",
      image: "/project2.png",
      isReverse: true,
    },
    {
      title: "To-do-list App",
      description:
        "This is a description of project 3. An elegant solution to complex problems.",
      image: "/project3.png",
      isReverse: false,
    },
    {
      title: "Spotify Clone",
      description:
        "This is a description of project 3. An elegant solution to complex problems.",
      image: "/project4.png",
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
            <button className="btn-touch">
              Get in touch <span>&gt;</span>
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Project;
