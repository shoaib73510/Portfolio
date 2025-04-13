import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./Projects.css";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      once: true,          // 👈 Animate only once (doesn’t hide elements on scroll)
      duration: 800,       // Optional: animation speed in ms
      easing: "ease-in-out" // Optional: smoother animation
    });
  
    // Optional: make sure AOS refreshes after content loads
    setTimeout(() => AOS.refresh(), 500);
  }, []);
  const projects = [
    { 
      title: "Project 1 - Snake Game", 
      
      description: "This version of the Snake Game is built using JavaScript, HTML, and CSS. The game  runs entirely in the browser and features a simple and interactive design. You control the snake's movement using arrow keys, and the game keeps track of your score based on the number of food items consumed.", 
      imgSrc: "p1.jpg" 
    },
    { 
      title: "Project 2 - Memory Game", 
      description: "A simple Memory Game built with JavaScript, HTML, and CSS. The game challenges players to match pairs of cards. Flip two cards at a time, and if they match, they remain face-up. If not, they will flip back. The game continues until all pairs are matched.", 
      imgSrc: "mem.jpg" 
    },
    { 
      title: "Project 3 - Responsive Company Website", 
      description: "Developed a Responsive company website using HTML5, CSS3, Bootstrap", 
      imgSrc: "b2.jpg" 
    },
    { 
      title: "Project 4 - Notes Taker", 
      description: "Developed a Notes taker app using HTML5, CSS3, Bootstrap, React, Express, Node.js, and MongoDB.", 
      imgSrc: "notes.png" 
    },
    { 
      title: "Project 5 - User Registration", 
      description: "Developed a User Registration app using HTML5, CSS3, Bootstrap, React, Express, Node.js, and MongoDB.", 
      imgSrc: "userlist.png" 
    },
    { 
      title: "Project 6 - Fitness Tracking", 
      description: "Developed a Fitness Tracking app using HTML5, CSS3, Bootstrap, React, Express, Node.js, and MongoDB.", 
      imgSrc: "fit.png" 
    },
  ];

  return (
    <div className="container cnm">
      <h2 className="text-center mb-4 text-light my-5">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div 
            className="col-md-4 mb-4" 
            key={index}   
            >
            <div className="card mydemo">
              <img 
                src={project.imgSrc || "fall" } 
                className="card-img-top" 
                alt={project.title} 
              />
              <div className="card-body">
                <p className="card-title">{project.title}</p>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-fixed">
        © 2025 Mohammed Shoaib ur Rahman
      </div>
    </div>
  );
};

export default Projects;
