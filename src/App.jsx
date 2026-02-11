import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [tab, setTab] = useState("about");

  return (
    <div className="App">
      <Navbar setTab={setTab} />
      {tab === "about" && <AboutMe />}
      {tab === "projects" && <Projects />}
      {tab === "contact" && <Contact />}
    </div>
  );
}

export default App;
