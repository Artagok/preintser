import React from "react";

export const langs = {
  ca: {
    navbar: {
      home: "Inici",
      us: "Qui som?",
      services: "Serveis",
      contact: "Contacte"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      us: "¿Quiénes somos?",
      services: "Servicios",
      contact: "Contacto"
    }
  },
  en: {
    navbar: {
      home: "Home",
      us: "About us",
      services: "Services",
      contact: "Contact"
    }
  }
};

export const LangContext = React.createContext({
  lang: langs.ca,
  toggleLang: () => {}
});
