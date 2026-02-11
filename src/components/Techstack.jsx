import React from "react";

export default function TechStack() {

const techs = [

    { name: "Java", color:"#f89820" },
    { name: "Python", color: "#306998" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "React", color: "#61dafb" },
    { name: "Node.js", color: "#339933" },
    { name: "Git/GitHub", color: "#181717" },
    { name: "SQL", color: "#f29111" },
    { name: "Jira/Agile", color: "#0052cc" },
];

return (
    <div className="tech-stack">
      {techs.map((tech) => (
        <span
          key={tech.name}
          style={{
            backgroundColor: tech.color,
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            margin: "0.3rem",
            display: "inline-block",
          }}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );

}