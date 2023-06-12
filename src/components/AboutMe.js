import React from "react";
import camera from "../public/img/camera.png";
import image from "../public/img/coding.png";


export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            I am a experienced full stack developer and I am skilled in  React
            and web development, as well as the C# .Net framework. I am
            looking to gain more valuable experience in an IT environment and expand
            my competence. I am ready for challenges and eager to learn and
            acquire new skills.
            <br />
            <br /> I graduated from the University of Westminster
            in United Kingdom with a degree in Software Engineering with a
            (Second Class Honours: First Division).
            <br />
            <br />
            Privately, in addition to developing cool web applications, I am
            interested in travel photography.
            <a href="https://www.facebook.com/nipunadkphotography/photos"  rel="noreferrer" target= "_blank" title="Click to view my collections"><img src={camera} alt="camera" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
