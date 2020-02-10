import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LegalTexts.css";

const LegalTexts = props => {
  /* Give content room above so it doesnt collide with TitleBar */
  useEffect(() => {
    document.getElementById("content-ref").style.paddingTop =
      (document.getElementById("title-bar-ref").offsetHeight + 16).toString() +
      "px";
  }, []);

  // Title Bar =~ NavBar for this page
  const TitleBar = props => (
    <div style={{ position: "fixed" }}>
      <div className="title-bar" id="title-bar-ref">
        <div className="title-bar-item">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="title-bar-item">
          <h3>{props.lang.footer.legal[props.type]}</h3>
        </div>
        <div className="title-bar-item"> </div>
      </div>
    </div>
  );

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="legaltexts-wrapper">
          <TitleBar lang={lang} type={props.type} />
          <div className="legaltexts-content-wrapper" id="content-ref">
            {content[props.type]}
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default LegalTexts;

/* ====== Content of the Page ====== */
// _0 --> legal
// _1 --> privacy
// _2 --> cookies
// content = [_0, _1, _2]
const _0 = props => (
  <React.Fragment>
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
      Servicios de la Sociedad de la Información y del Comercio Electrónico
      (LSSICE), Preintser Multiservicios, S.L.U. (en adelante, “Reformas
      Preintser”), Responsable de esta web, pone a disposición de los Usuarios
      la presente información, para definir sus Condiciones de Uso.
    </p>
    <p>
      Adicionalmente a los contenidos aquí expuestos, los aspectos específicos
      relacionados con la protección de los datos personales y la privacidad de
      los usuarios de esta web se desarrollan en las páginas de Política de
      Privacidad y Política de Cookies.
    </p>
  </React.Fragment>
);
const _1 = props => "Hola";
const _2 = props => "Hola";
const content = [<_0 />, <_1 />, <_2 />];
