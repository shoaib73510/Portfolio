import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
const Projects = () => {
  AOS.init();

  const projects = [
    { title: "Project 1", description: "A brief description of project 1", imgSrc: "p1.jpg" },
    { title: "Project 2", description: "A brief description of project 2", imgSrc: "mem.jpg" },
    { title: "Project 3", description: "A brief description of project 3", imgSrc: "mem.jpg" },
    { title: "Project 3", description: "A brief description of project 3", imgSrc: "b2.jpg" }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
            <div className="card">
              <img src={project.imgSrc} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
