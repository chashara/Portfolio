import React from "react";
import TechStack from "./TechStack";
import "./AboutMe.css";


export default function AboutMe() {

return (

<section className="about-me">
    <div className="about-container">
<h1> Hi, I am Chashara</h1>
<p>I am a recent software engineering graduate passionate about building
        both frontend and backend solutions. I enjoy working in agile teams
        and constantly learning new technologies.
        </p>
<h2> My Skills and Tech Stack</h2>
<TechStack />

</div>
</section>




);



}