import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>ersatile and ambitious Software Engineering Graduate with a strong foundation in software development, 
            data analytics, and virtual assistance. Proficient in flask, SQL, and react with hands-on experience in 
            data visualization, systems analysis, and predictive modelling. Adept at leveraging analytical skills and 
            technical expertise to deliver innovative solutions. Collaborative leader with a passion for technology, 
            problem-solving, and driving quality in software and data systems.</p>
    <img src = {image} alt="I made this"></img>
  </div>;
}

export default About;
