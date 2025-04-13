import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero() {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center">
      <div className="main text-center px-3">
        <h6 className="cl">Hi there, I'm</h6>
        <h2 className="cl line1">Mohammed Shoaib ur Rahman</h2>
        <h4 className="cl">MERN Stack Developer building seamless, scalable digital experiences.</h4>
        <br />
        <h6 className="cl last">
          With expertise in crafting dynamic web applications, I specialize in combining MongoDB, Express, React, and Node.js 
          to deliver performance-driven solutions. Whether it's developing user-friendly interfaces, optimizing backend 
          functionality, or creating robust APIs, I thrive on transforming ideas into impactful realities.

          Let's build the next big thing together.
        </h6>
        <button 
          onClick={() => window.location.href = 'mailto:shyuaib007@gmail.com'} 
          className="btn btn-light text-dark rounded-pill mt-3">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Hero;
