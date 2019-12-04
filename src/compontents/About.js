import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./About.css";

const About = props => {
  return (
    <div className="about-wrapper" id="section2">
      <div className="text-box-wrapper">
        <TextBox>
          <h2>L'empresa</h2>
          <p>
            Som Preintser Multiserveis S.L. empresa dedicada a les reformes i
            les rehabilitacions integrals per a particulars, comunitats de veïns
            i sector industrial. Rehabilitem locals, aparcaments, naus i molt
            més.
          </p>
          <p>
            Estem registrats al REA, RERA i a la Cambra de Comerç de Barcelona.
            A més, estem associats al Gremi de Pintors. Estem situats a
            Barcelona, contacti amb nosaltres.
          </p>
        </TextBox>
        <TextBox>
          <h2>Amiant i fibrociment (manipulació i retirada)</h2>
          <p>
            Som una empresa autoritzada en la manipulació i la retirada de
            l'amiant (tubs de fibrociment) i també realitzem canvis de baixants
            de fibrociment.
          </p>
          <p>
            Estem registrats al RERA (Registre d'Empreses amb Risc d'Amiant) amb
            el Nº32/AB/10 per tal de poder realitzar tots els treballs segons la
            Normativa Vigent.
          </p>
        </TextBox>
      </div>
    </div>
  );
};

export default About;

const TextBox = props => {
  return <div className="text-box">{props.children}</div>;
};
