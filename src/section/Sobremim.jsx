import React from "react";
import style from "./Sobremim.module.css";
import TimeLineCard from "../elements/TimeLineCard";

function Sobremim() {
  return (
    <div className={style.sobremim} id="sobre">
      <h1>Sobre mim</h1>

      <div>
       
        <TimeLineCard
          ano="2021"
          lineLeft={false}
          ball={true}
          lineRight={true}
          texto="Iniciei um estagio na area da tecnologia atuando como estagiario em engenharia de aplicação"
        />
        <TimeLineCard
          ano="2022"
          lineLeft={true}
          ball={true}
          lineRight={true}
          texto="Concluí o Bacharelado em Ciência e Tecnologia  pela Universidade Federal de São Paulo."
        />

        <TimeLineCard
          ano="2023"
          lineLeft={true}
          ball={true}
          lineRight={true}
          texto="Iniciei meu primeiro trabalho com Desenvolvedor Full Stack jr"
        />

        <TimeLineCard
          ano="2024"
          lineLeft={true}
          ball={true}
          lineRight={false}
          texto="Iniciei a formação em Engenharia de Software pela Escola DNC"
        />
      </div>
    </div>
  );
}

export default Sobremim;
