import React from "react";

export default function TechStack() {
  const techs = [
    { name: "Java", color: "#f89820" },
    { name: "Python", color: "#7d53bcff" },
    { name: "JavaScript", color: "#f7df1e", textColor: "#111" },
    { name: "React", color: "#61dafb", textColor: "#111" },
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
            color: tech.textColor || "white",
          }}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}
