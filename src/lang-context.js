import React from "react";

export const langs = {
  ca: {
    navbar: {
      home: "Inici",
      about: "Qui som?",
      services: "Serveis",
      contact: "Contacte"
    },
    home: {
      title: "Els nostres treballs"
    },
    about: {
      textbox1: {
        title: "L'empresa",
        content1: `Som <b>Preintser Multiserveis S.L.U.</b>, empresa 
        dedicada a les <b>reformes</b> i les <b>rehabilitacions integrals</b> 
        per a particulars, comunitats de veïns i sector industrial. 
        Rehabilitem locals, aparcaments, naus i molt més.`,
        content2: `Estem registrats al REA, RERA i a la
         Cambra de Comerç de Barcelona. A més, estem associats 
         al Gremi de Pintors. Estem situats a Barcelona, contacti amb nosaltres.`
      },
      textbox2: {
        title: "Amiant i fibrociment (manipulació i retirada)",
        content1: `Som una empresa autoritzada en la manipulació i la retirada de
        l'<b>amiant</b> (tubs de fibrociment) i també realitzem canvis de
        baixants de <b>fibrociment</b>.`,
        content2: `Estem registrats al RERA (Registre d'Empreses amb Risc d'Amiant)
        amb el Nº32/AB/10 per tal de poder realitzar tots els treballs
        segons la Normativa Vigent.`
      }
    },
    contact: {
      box: {
        title: "Contacte",
        map: "Veure al mapa",
        days: "Dilluns - Divendres",
        hours1: "10:00h - 13:00h",
        hours2: "17:00h - 20:00h"
      },
      form: {
        title: "Digui'ns què pensa",
        name: "Nom",
        surname: "Cognoms",
        email: "Correu electrònic",
        phone: "Telèfon/Mòbil",
        optional: "Opcional",
        text: "Text",
        button: "Enviar",
        success_msg: "El seu missatge ha estat enviat. Moltes gràcies.",
        checkbox:
          "Accepto el tractament de les meves dades amb la finalitat de rebre la ",
        checkbox_span: "informació sol·licitada",
        checkbox_tooltip: `A Reformes Preintser (titularitat de Preintser Multiservicios, S.L.U.) tractarem la
        informació que ens facilitis amb la finalitat d'enviar-te <b>informació relacionada amb
        la teva sol·licitud</b> sobre els nostres productes i/o serveis. Podràs exercir els
        drets d'<b>accés</b>, <b>rectificació</b>, <b>limitació</b>, <b>oposició</b>, <b>portabilitat</b>, o <b>retirar</b> el
        consentimient enviant un email a <tt>preintser-decor@telefonica.net</tt>. També pots
        sol·licitar la tutela de drets davant l'Autoritat de Control (AEPD). <br><br> Pots consultar
        informació addicional i detallada sobre protecció de dades a la nostra <b>Política de
        Privacitat</b> situada al <b>peu de pàgina</b>.`,
        errors: {
          empty: "No pot ser buit",
          min: "Massa curt",
          max: "Massa llarg",
          email: "Introdueix un correu vàlid",
          required: "Aquest camp és obligatori",
          phone: "Introdueix un telèfon vàlid"
        }
      }
    },
    services: {
      _1: {
        name: "Rehabilitació i restauració",
        list: [
          "Treballs amb amiant",
          "Baixants",
          "Celoberts",
          "Façanes",
          "Torres",
          "Claraboies",
          "Reforç d'estructures",
          "Diagnòstic patològic",
          "Manteniment de comunitats de veïns"
        ]
      },
      _2: {
        name: "Reparacions",
        list: [
          "Escapaments d'aigua",
          "Canvi de calderes",
          "Humitats",
          "Curtcircuits",
          "Ferreteria",
          "Lampisteria",
          "Fontaneria",
          "Paleta general"
        ]
      },
      _3: {
        name: "Col·locació de paviments",
        list: [
          "Marbre",
          "Silestone",
          "Porcellana",
          "Granit",
          "Terratzo",
          "Gres",
          "Parquet"
        ]
      },
      _4: {
        name: "Reformes",
        list: [
          "Pisos",
          "Locals comercials",
          "Cuines",
          "Lavabos",
          "Escales",
          "Vestíbuls",
          "Terrasses"
        ]
      },
      _5: {
        name: "Aplicació de revestiments",
        list: ["Monocapa", "Xinès", "Guix/Pladur", "Morter CP/cal"]
      },
      _6: {
        name: "Pintura",
        list: ["Interior", "Exterior", "Epoxi", "Ignífug", "Intumescents"]
      },
      _7: {
        name: "Instal·lacions i legalitzacions de serveis",
        list: ["Electricitat", "Calefacció", "Aigua", "Gas"]
      },
      _8: {
        name: "Serveis complementaris",
        list: [
          "ITEs (Inspecció Tècnica de l'Edifici)",
          "IEEs (Informe d'Avaluació de l'Edifici)",
          "Cèdules d'habitabilitat",
          "Millores d'accessibilitat",
          "Llicències d'activitat",
          "Certificats d'eficiència energètica",
          "Projecte tècnic i Direcció d'execució d'obra",
          "Controls de qualitat",
          "Informes pericials",
          "Informes tècnics",
          "Dictàmens",
          "Valoracions i taxacions econòmiques",
          "Estudis i Plans de seguretat i salut"
        ]
      }
    },
    footer: {
      legal: [
        "Avís Legal",
        "Política de Privacitat",
        "Política de Cookies",
        "Certificat"
      ]
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "¿Quiénes somos?",
      services: "Servicios",
      contact: "Contacto"
    },
    home: {
      title: "Nuestros trabajos"
    },
    about: {
      textbox1: {
        title: "La empresa",
        content1: `Somos <b>Preintser Multiserveis S.L.U.</b>, empresa 
        dedicada a las <b>reformas</b> y las <b>rehabilitaciones integrales</b> 
        para particulares, comunidades de vecinos y sector industrial. 
        Rehabilitamos locales, aparcamientos, naves y mucho más.`,
        content2: `Estamos registrados al REA, RERA y a la
         Cambra de Comercio de Barcelona. Además, estamos asociados 
         al Gremio de Pintores. Estamos situados en Barcelona, 
         contacte con nosotros.`
      },
      textbox2: {
        title: "Amianto y fibrocemento (manipulación y retirada)",
        content1: `Somos una empresa autorizada en la manipulación y la retirada del
        <b>amianto</b> (tubos de fibrocemento) y también realizamos cambios de
        bajantes de <b>fibrocemento</b>.`,
        content2: `Estamos registrados al RERA (Registre d'Empreses 
        amb Risc d'Amiant) con el Nº32/AB/10 con tal de poder realizar 
        todos los trabajos de acuerdo con la Normativa Vigente.`
      }
    },
    contact: {
      box: {
        title: "Contacto",
        map: "Ver en mapa",
        days: "Lunes - Viernes",
        hours1: "10:00h - 13:00h",
        hours2: "17:00h - 20:00h"
      },
      form: {
        title: "Díganos qué piensa",
        name: "Nombre",
        surname: "Apellidos",
        email: "Correo electrónico",
        phone: "Teléfono/Móvil",
        optional: "Opcional",
        text: "Texto",
        button: "Enviar",
        success_msg: "Su mensaje ha sido enviado. Muchas gracias.",
        checkbox:
          "Acepto el tratamiento de mis datos con la finalidad de recibir la ",
        checkbox_span: "información solicitada",
        checkbox_tooltip: `En Reformas Preintser (titularidad de Preintser Multiservicios, S.L.U.) trataremos la
        información que nos facilites con la finalidad de enviarte <b>información relacionada con
        tu solicitud</b> sobre nuestros productos y/o servicios. Podrás ejercer los
        derechos de <b>acceso</b>, <b>rectificación</b>, <b>limitación</b>, <b>oposición</b>, <b>portabilidad</b>, o <b>retirar</b> el
        consentimiento enviando un email a <tt>preintser-decor@telefonica.net</tt>. También puedes
        solicitar la tutela de derechos ante la Autoridad de Control (AEPD). <br><br> Puedes consultar
        información adicional y detallada sobre protección de datos en nuestra <b>Política de
        Privacidad</b> situada en el <b>pie de página</b>.`,
        errors: {
          empty: "No puede ser vacío",
          min: "Demasiado corto",
          max: "Demasiado largo",
          email: "Introduce un correo válido",
          required: "Este campo es obligatorio",
          phone: "Introduce un teléfono válido"
        }
      }
    },
    services: {
      _1: {
        name: "Rehabilitación y restauración",
        list: [
          "Trabajos con amianto",
          "Bajantes",
          "Patios de luz",
          "Fachadas",
          "Torres",
          "Claraboyas",
          "Refuerzo de estructures",
          "Diagnóstico patológico",
          "Mantenimiento de comunidades de vecinos"
        ]
      },
      _2: {
        name: "Reparaciones",
        list: [
          "Escapes de agua",
          "Cambio de calderas",
          "Humedades",
          "Cortocircuitos",
          "Herrería",
          "Lampistería",
          "Fontanería",
          "Albañilería general"
        ]
      },
      _3: {
        name: "Colocación de pavimentos",
        list: [
          "Mármol",
          "Silestone",
          "Porcelanato",
          "Granito",
          "Terrazo",
          "Gres",
          "Parquet"
        ]
      },
      _4: {
        name: "Reformas",
        list: [
          "Pisos",
          "Locales comerciales",
          "Cocinas",
          "Cuartos de baño",
          "Escaleras",
          "Vestíbulos",
          "Terrados"
        ]
      },
      _5: {
        name: "Aplicación de revestimientos",
        list: ["Monocapa", "Chino", "Yesería/Pladur", "Mortero CP/cal"]
      },
      _6: {
        name: "Pintura",
        list: ["Interior", "Exterior", "Epoxi", "Ignífugo", "Intumescentes"]
      },
      _7: {
        name: "Instalaciones y legalizaciones de servicios",
        list: ["Electricidad", "Calefacción", "Agua", "Gas"]
      },
      _8: {
        name: "Servicios complementarios",
        list: [
          "ITEs (Inspección Técnica del Edificio)",
          "IEEs (Informe de Evaluación del Edificio)",
          "Cédulas de habitabilidad",
          "Mejoras de accesibilidad",
          "Licencias de actividades",
          "Certificados de eficiencia energetica",
          "Proyecto técnico y Dirección de ejecución de obra",
          "Controles de calidad",
          "Informes periciales",
          "Informes técnicos",
          "Dictàmenes",
          "Valoraciones y tasaciones económicas",
          "Estudios y Planos de seguridad y salud"
        ]
      }
    },
    footer: {
      legal: [
        "Aviso Legal",
        "Política de Privacidad",
        "Política de Cookies",
        "Certificado"
      ]
    }
  },
  en: {
    navbar: {
      home: "Home",
      about: "About us",
      services: "Services",
      contact: "Contact"
    },
    home: {
      title: "Our works"
    },
    about: {
      textbox1: {
        title: "Our company",
        content1: `We are <b>Preintser Multiserveis S.L.U.</b>, a company dedicated to
        <b>reforming</b> and <b>integral rehabilitations</b> for individuals, 
        neighborhood communities and the industrial sector.
        We rehabilitate premises, parkings, industrial buildings and much more`,
        content2: `We are registered at REA, RERA and the
        Cambra de Comerç de Barcelona. Moreover, we are associated to the 
        Gremi de Pintors. We are located in Barcelona, contact us. `
      },
      textbox2: {
        title: "Asbestos and asbestos cement (manipulation and removal)",
        content1: `We are a certified company in manipulation and removal of 
        <b>asbestos</b> and we also perform downspout changes 
        <b>(asbestos cement pipes)</b>.`,
        content2: `We are registered at RERA (Registre d'Empreses 
        amb Risc d'Amiant) with number Nº32/AB/10 in order to perform
        our job according to the regulations in force.`
      }
    },
    contact: {
      box: {
        title: "Contact",
        map: "See on map",
        days: "Monday - Friday",
        hours1: "10 AM - 1 PM",
        hours2: "5 PM - 8 PM"
      },
      form: {
        title: "Tell us what you think",
        name: "Name",
        surname: "Surname",
        email: "e-mail",
        phone: "Phone/Mobile",
        optional: "Optional",
        text: "Text",
        button: "Submit",
        success_msg: "Your message has been sent. Thank you.",
        checkbox:
          "I accept the treatment of my data with the purpose of receiving the ",
        checkbox_span: "required information",
        checkbox_tooltip: `At Reformes Preintser (titularity of Preintser Multiservicios, S.L.U.) we will treat the
        information you provide us with the purpose of sending you <b>information related to your request</b> of our products and/or services. You can exercise your
        rights of <b>access</b>, <b>amendment</b>, <b>limitation</b>, <b>opposition</b>, <b>portability</b>, or <b>withdrawal</b> of
        consent by sending an email at <tt>preintser-decor@telefonica.net</tt>. You can also
        apply for tutelage of rights before <i>Autoritat de Control (AEPD)</i>. <br><br> You can find
        additional and detailed information about data protection in our <b>Privacy Policy</b> 
        located at the <b>page footer</b>.`,
        errors: {
          empty: "Can't be empty",
          min: "Too short",
          max: "Too long",
          email: "Type a valid email",
          required: "This field is required",
          phone: "Type a valid phone number"
        }
      }
    },
    services: {
      _1: {
        name: "Rehabilitation and restoration",
        list: [
          "Amiant related works",
          "Downspouts",
          "Light shafts",
          "Facade",
          "Towers",
          "Skylights",
          "Structure reinforcement",
          "Pathological diagnosis",
          "Residents' association"
        ]
      },
      _2: {
        name: "Repairs",
        list: [
          "Water leaks",
          "Boiler replacements",
          "Humidity",
          "Short circuits",
          "Smithy",
          "Plumbing",
          "Brickwork"
        ]
      },
      _3: {
        name: "Pavement placement",
        list: [
          "Marble",
          "Silestone",
          "Porcelain",
          "Granite",
          "Terrazzo",
          "Stoneware",
          "Parquet"
        ]
      },
      _4: {
        name: "Reformations",
        list: [
          "Flats",
          "Shops",
          "Kitchens",
          "Bathrooms",
          "Stairways",
          "Hallways",
          "Roofs"
        ]
      },
      _5: {
        name: "Coating application",
        list: ["Monolayer", "Chinese", "Plasterwork", "Mortar CP/cal"]
      },
      _6: {
        name: "Painting",
        list: [
          "Interior",
          "Exterior",
          "Epoxi",
          "Flame retardant",
          "Intumescent"
        ]
      },
      _7: {
        name: "Installation & Legalization of services",
        list: ["Electricity", "Heating", "Water", "Gas"]
      },
      _8: {
        name: "Complementary Services",
        list: [
          "ITEs (Technical Inspection of the Building)",
          "IEEs (Building's Evaluation Report)",
          "Habitability Documentation",
          "Improvements in accessibility",
          "Activity licenses",
          "Energy Efficiency Certificate",
          "Technical project & Direction of construction execution",
          "QA",
          "Expert reports",
          "Technical reports",
          "Dictum",
          "Economic appraisal",
          "Security and Health Plans"
        ]
      }
    },
    footer: {
      legal: ["Legal Notice", "Privacy Policy", "Cookies Policy", "Certificate"]
    }
  }
};

export const LangContext = React.createContext({
  lang: langs.ca,
  toggleLang: () => {}
});
