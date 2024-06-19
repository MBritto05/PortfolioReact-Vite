import React from "react";
import style from "./Presentation.module.css";
import ButtonB from "../elements/ButtonB";
import { useEffect, useState } from "react";

function Presentation() {

  const [text, setText] = useState('');
  const toRotate = ['Airton Santos!', 'Desenvolvedor Full Stack'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100)
  

  useEffect(()=>{
      let ticker = setInterval(()=>{
          toType()
      }, delta)
      return()=> {clearInterval(ticker)}

  }, [text])

  const toType = () =>{
     let i = loop % toRotate.length;
     let fullText = toRotate[i]
     let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

     setText(updatedText);

     if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
     }else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
     }

  }

  return (
    <div id="apresentacao" className={style.presentation}>
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1> Olá, eu sou {text}</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras.
        <br />
        Como desenvolvedor FullStack eu tenho o compromisso de
        <br /> resolver problemas complexos e trazer resultados excepcionais
        para <br />
        os negócios. estou sempre em busca de novos desafios para superar.
      </p>
      <ButtonB
        text="Saber mais"
        link="https://www.linkedin.com/in/airton-dos-santos-/"
      />
      <br />
    </div>
  );
}

export default Presentation;
