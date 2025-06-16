

import { GloabelContext } from "../gloabelContext";
import React, { useContext, useState } from 'react';
import Navigation from './navigation';
import Top from "./top";

//MAIN FORSIDE

function Frontpage({ index }) {
    const [by, setBy] = useState("featured");
  // Tilgår farve-tilstand og setColor-funktion fra konteksten
  const { color, setColor } = useContext(GloabelContext);

  // Definerer stilarter til lys og mørk tema
  const styleLight = {
    backgroundColor: "#FFF",
    color: "#333"
  };

  const styleDark = {
    backgroundColor: "#333",
    color: "#FFF"
  };

  // Funktion til at skifte mellem lys og mørk tema
  const toggleColor = () => {
    // Opdaterer farve-tilstanden baseret på den nuværende værdi
    setColor(prevColor => (prevColor === "light" ? "dark" : "light"));
  };

  return (
    <>
    <Navigation/>
    <Top/>
    </>
  );
}

export default Frontpage;