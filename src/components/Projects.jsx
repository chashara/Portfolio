import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-card">
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
