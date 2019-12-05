import React from "react";

export const langs = {
  ca: {
    navbar: {
      home: "Inici",
      about: "Qui som?",
      services: "Serveis",
      contact: "Contacte"
    },
    about: {
      textbox1: {
        title: "L'empresa",
        content1: `Som <b>Preintser Multiserveis S.L.</b>, empresa 
        dedicada a les <b>reformes</b> i les <b>rehabilitacions integrals</b> 
        per a particulars, comunitats de veïns i sector industrial. 
        Rehabilitem locals, aparcaments, naus i molt més.`,
        content2: `Estem registrats al <b>REA</b>, <b>RERA</b> i a la
         <b>Cambra de Comerç de Barcelona</b>. A més, estem associats 
         al <b>Gremi de Pintors</b>. Estem situats a <b>Barcelona</b>, contacti amb nosaltres.`
      },
      textbox2: {
        title: "Amiant i fibrociment (manipulació i retirada)",
        content1: `Som una empresa autoritzada en la manipulació i la retirada de
        l'<b>amiant</b> (tubs de fibrociment) i també realitzem canvis de
        baixants de <b>fibrociment</b>.`,
        content2: `Estem registrats al <b>RERA</b> (Registre d'Empreses amb Risc d'Amiant)
        amb el <b>Nº32/AB/10</b> per tal de poder realitzar tots els treballs
        segons la Normativa Vigent.`
      }
    },
    contact: {
      box: {
        title: "Contacte"
      },
      form: {}
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "¿Quiénes somos?",
      services: "Servicios",
      contact: "Contacto"
    },
    about: {
      textbox1: {
        title: "La empresa",
        content1: `Somos <b>Preintser Multiserveis S.L.</b>, empresa 
        dedicada a las <b>reformas</b> y las <b>rehabilitaciones integrales</b> 
        para particulares, comunidades de vecinos y sector industrial. 
        Rehabilitamos locales, aparcamientos, naves y mucho más.`,
        content2: `Estamos registrados al <b>REA</b>, <b>RERA</b> y a la
         <b>Cambra de Comercio de Barcelona</b>. Además, estamos asociados 
         al <b>Gremio de Pintores</b>. Estamos situados en <b>Barcelona</b>, 
         contacte con nosotros.`
      },
      textbox2: {
        title: "Amianto y fibrocemento (manipulación y retirada)",
        content1: `Somos una empresa autorizada en la manipulación y la retirada del
        <b>amianto</b> (tubos de fibrocemento) y también realizamos cambios de
        bajantes de <b>fibrocemento</b>.`,
        content2: `Estamos registrados al <b>RERA</b> (Registre d'Empreses 
        amb Risc d'Amiant) con el <b>Nº32/AB/10</b> con tal de poder realizar 
        todos los trabajos de acuerdo con la Normativa Vigente.`
      }
    },
    contact: {
      box: {
        title: "Contacto"
      },
      form: {}
    }
  },
  en: {
    navbar: {
      home: "Home",
      about: "About us",
      services: "Services",
      contact: "Contact"
    },
    about: {
      textbox1: {
        title: "Our company",
        content1: `We are <b>Preintser Multiserveis S.L.</b>, a company dedicated to
        <b>reforming</b> and <b>integral rehabilitations</b> for individuals, 
        neighborhood communities and the industrial sector.
        We rehabilitate premises, parkings, industrial buildings and much more`,
        content2: `We are registered at <b>REA</b>, <b>RERA</b> and the
        <b>Cambra de Comerç de Barcelona</b>. Moreover, we are associated to the 
        <b>Gremi de Pintors</b>. We are located in Barcelona, contact us. `
      },
      textbox2: {
        title: "Asbestos and asbestos cement (manipulation and removal)",
        content1: `We are a certified company in manipulation and removal of 
        <b>asbestos</b> and we also perform downspout changes 
        <b>(asbestos cement pipes)</babout.`,
        content2: `We are registered at <b>RERA</b> (Registre d'Empreses 
        amb Risc d'Amiant) with number <b>Nº32/AB/10</b> in order to perform
        our job according to the regulations in force.`
      }
    },
    contact: {
      box: {
        title: "Contact"
      },
      form: {}
    }
  }
};

export const LangContext = React.createContext({
  lang: langs.ca,
  toggleLang: () => {}
});
