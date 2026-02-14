import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
       <div className="project-container">
        <h2>Data Visualizer</h2>
        <p>
          A React + D3.js frontend app that allows users to upload CSV or JSON
          files and visualize the data. Features include bar, line, and scatter
          charts.
        </p>
        <img src="/assets/data-visualizer.png" alt="Data Visualizer Screenshot" />
        <p>
          <a
            href="https://github.com/yourusername/data-visualizer"
            target="_blank"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
