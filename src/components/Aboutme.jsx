import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profile-pic">
        <img src="/profile.jpg" alt="Chasi" />
      </div>

      <div className="about-content">
        <h1 className="fade-in">Hi, I’m Chashara!</h1>
        <p className="slide-up">
          Motivated and hands-on Software Engineering graduate with strong experience in modern web development, full-stack
applications, data processing, and API integration. Proven ability to build real-world projects using React, Node.js, FastAPI,
and cloud technologies. Adaptable, fast learner, and open to any technical role including software development, frontend,
backend, data, QA, or technical support.
        </p>

        <p className="slide-up delay">
          Outside of coding, I enjoy designing clean interfaces, learning new
          frameworks, and staying up-to-date with the latest web trends.
        </p>

        <div className="skills fade-in-delay">
          <h2>My Skills</h2>
          <ul>
            <li>React + Vite</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>D3.js & Data Visualization</li>
            <li>Node.js / FastAPI</li>
            <li>AWS</li>
            <li>GitHub</li>
            <li>Python</li>
            <li>Android Studio</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
