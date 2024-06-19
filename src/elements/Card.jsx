import React from "react";
import style from "./Card.module.css";

import ButtonB from "./ButtonB";

function Card({ img, title, tech, description, repo, site }) {
  return (
    <div className={style.card}>
      
      <section>
      <a href={site}>
        <img src={img} alt="error" />
      </a>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologia:</strong>
          {tech}
        </p>
        <p>{description}</p>
        <ButtonB text="Clique aqui" link={repo} />
      </section>
    </div>
  );
}

export default Card;
