import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../public/img/hi.png";
import localizationIco from "../public/img/place.png";
import lndIco from "../public/img/linkedinIco.png";
import gitIco from "../public/img/githubIco.png";
import htmlIco from "../public/img/html.png";
import cssIco from "../public/img/css.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import redux from "../public/img/redux.png";
import avatar from "../public/img/dp2.jpg";
import csharp from "../public/img/csharp1.png";
import netCore from "../public/img/core.png";
import mysql from "../public/img/mySql.png";
import mssql from "../public/img/msSql.png";
import gitlab from "../public/img/gitlab.png";

import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [reduxJs, setRedux] = useState("");
  const [cSharp, setCsharp] = useState("");
  const [core, setCore] = useState("");
  const [mySql, setMysql] = useState("");
  const [msSql, setMsSql] = useState("");
  const [gitLab, setGitLab] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id === "HTML") {
      setHtml(true);
    } else if (e.target.id === "CSS") {
      setCss(true);
    } else if (e.target.id === "JavaScript") {
      setJs(true);
    } else if (e.target.id === "Bootstrap") {
      setBoot(true);
    } else if (e.target.id === "React") {
      setReact(true);
    } else if (e.target.id === "redux.js") {
      setRedux(true);
    } else if (e.target.id === "cSharp") {
      setCsharp(true);
    } else if (e.target.id === "core") {
      setCore(true);
    } else if (e.target.id === "mySql") {
      setMysql(true);
    } else if (e.target.id === "msSql") {
      setMsSql(true);
    } else if (e.target.id === "gitlab") {
      setGitLab(true);
    }


  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setRedux();
    setCsharp();
    setCore();
    setMysql();
    setMsSql();
    setGitLab();
  };
  return (
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">React Developer</span>
          <img src={hiIco} className="hello-ico" alt="hello icon" />
          <div className="description">
            Hi, I'm Nipuna Gomes. A passionate Full-Stack | React Developer
            based in Colombo, Sri Lanka.
            <a href="#contact">
              <img
                src={localizationIco}
                className="localization-ico"
                alt="localization icon"
              />
            </a>
          </div>
          <div>
            <div className="description">Social:</div>
            <a
              href="https://www.linkedin.com/in/nipuna-c-gomes-39500743/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={lndIco} className="social-ico" alt="linkedin icon" />
            </a>
            <a href="https://github.com/nipunadk?tab=repositories" 
            target="_blank" 
            rel="noreferrer">
              <img src={gitIco} className="social-ico" alt="github icon" />
            </a>
          </div>
          <div className="description">Tech Stack:</div>
          <div className="tech-stack-box">

            <div
              className="tech-stack-single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico2" alt="react icon" />
              <span>{react ? "React.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="redux.js"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={redux} className="tech-ico3" alt="redux.js icon" />
              <span>{reduxJs ? "Redux.js" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="core"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={netCore} className="tech-ico3" alt=".NetCore" />
              <span>{core ? ".Net Core" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="cSharp"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={csharp} className="tech-ico3" alt="c# icon" />
              <span>{cSharp ? "C#" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="msSql"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={mssql} className="tech-ico3" alt="MS SQL" />
              <span>{msSql ? "MS SQL Server" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="mySql"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={mysql} className="tech-ico3" alt="mySQL" />
              <span>{mySql ? "mySQL" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="gitlab"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={gitlab} className="tech-ico3" alt="GitLab" />
              <span>{gitLab ? "GitLab" : ""}</span>
            </div>

            <div
              className="tech-stack-single-box"
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico1" alt="css icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="JavaScript"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico1" alt="js icon" />
              <span>{js ? "JavaScript" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Bootstrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={bootIco} className="tech-ico2" alt="bootstrap icon" />
              <span>{boot ? "Bootstrap" : ""}</span>
            </div>

          </div>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={3}
              />
            </Sphere>
          </Canvas>
          <img src={avatar} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
