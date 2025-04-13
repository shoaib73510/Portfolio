import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutme.css';

function GlowCapture({ children }) {
  return <div className="glow-capture">{children}</div>;
}

function Glow({ color, children }) {
  return (
    <div className="glow" style={{ '--glow-color': color }}>
      {children}
    </div>
  );
}

function Aboutme() {
  return (
    <>
      <div className="container-fluid bb bak d-flex justify-content-center align-items-center ppp">
        <div className="content text-center">
          <h5>Hi</h5>
          <GlowCapture>
            <Glow color="hsl(338.69, 100%, 48.04%)">
              <h2 className="line1 glowable-text">I'm Mohammed Shoaib ur Rahman</h2>
            </Glow>
          </GlowCapture>
          <h2>a MERN Stack Developer</h2>
          <p className="pl">
            I am a creative, time punctual, dedicated, goal-oriented individual <br />
            with decent moral values and ethics along with a high-energy level, <br />
            strong organizational skills, and meticulous attention to detail.
          </p>
        </div>
      </div>

      
      <div className="bottom-fixed">
        © 2025 Mohammed Shoaib ur Rahman
      </div>
    </>
  );
}

export default Aboutme;
