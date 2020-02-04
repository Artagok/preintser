import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LegalTexts.css";

const LegalTexts = props => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (<div>{`Tipus: ${props.type}`}</div>)}
    </LangContext.Consumer>
  );
};

export default LegalTexts;
