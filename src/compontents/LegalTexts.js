import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LegalTexts.css";

const LegalTexts = props => {
  // Title Bar =~ NavBar for this page
  const TitleBar = () => (
    <div style={{ position: "fixed" }}>
      <div className="title-bar">
        <div className="title-bar-item">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="title-bar-item">
          <h3>aaaIaaa</h3>
        </div>
        <div className="title-bar-item"> </div>
      </div>
    </div>
  );

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="legaltexts-wrapper">
          <TitleBar />
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default LegalTexts;
