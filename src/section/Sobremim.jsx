import React from "react";
import style from "./Sobremim.module.css";
import TimeLineCard from "../elements/TimeLineCard";

function Sobremim() {
  return (
    <div className={style.sobremim} id="sobre">
      <h1>Sobre mim</h1>

      <div>
       
        <TimeLineCard
          ano="2024"
          lineLeft={false}
          ball={true}
          lineRight={true}
          texto="Conheci o mundo da programação"
        />
        <TimeLineCard
          ano="2024"
          lineLeft={true}
          ball={true}
          lineRight={true}
          texto="Iniciei a formação em Desenvolvimento Front End pela Escola DNC"
        />

        <TimeLineCard
          ano="2025"
          lineLeft={true}
          ball={true}
          lineRight={true}
          texto="Desenvolvi alguns projetos"
        />

        <TimeLineCard
          ano="2025"
          lineLeft={true}
          ball={true}
          lineRight={false}
          texto="Iniciei na Graduação de Análise e Desenvolvimento de Sistemas"
        />
      </div>
    </div>
  );
}

export default Sobremim;