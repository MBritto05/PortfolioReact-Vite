import { useState } from "react";


import "./App.css";

import NavBar from './section/NavBar/';
import Presentation from "./section/Presentation/";
import Projects from "./section/Projects/";
import Sobremim from "./section/Sobremim/";
import Footer from "./section/Footer/";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Presentation />
      <Projects />
      <Sobremim />
      <Footer />
    </>
  );
}


