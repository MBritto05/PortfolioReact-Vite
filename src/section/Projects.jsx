import React from "react";
import style from "./Projects.module.css";
import ButtonB from "../elements/ButtonB/";
import Card from "./../elements/Card";
import ls from "../imagens/project/lp.svg";
import ls2 from "../imagens/project/lp2.png";

function Projects() {
  return (
    <>
     <h1 className={style.h1}>Projetos</h1>
    <div className={style.projects} id="projetos">
      
      
      <Card
        img={ls}
        title=" LP - DNC"
        tech=" HTML, CSS"
        description=" Desenvolvimento de uma Landing Page para o lançamento de formação em tecnnologia"
        repo="https://firstresponsiveproject.netlify.app/"
        site="https://firstresponsiveproject.netlify.app/"
      />

      <Card
        img={ls2}
        title=" Landing Page -  Empresa de Arquitetura"
        tech=" HTML, CSS"
        description=" Desenvolvimento de uma Landing Page de exibição de uma empresa de Arquitetura "
        repo="https://britto-first-landingpage.netlify.app/"
        site="https://britto-first-landingpage.netlify.app/"
      />

    </div>
    </>
  );
}

export default Projects;
