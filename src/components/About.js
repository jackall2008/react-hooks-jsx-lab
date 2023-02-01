import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p> I am a 35 year old attorney, entrepreneur, and philanthropist looking to make a difference in the global tech community!</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
