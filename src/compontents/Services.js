import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import { UncontrolledCollapse } from "reactstrap";
import "./Services.css";

const Services = props => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="services-wrapper" id="services">
          <div className="accordion-wrapper">
            <div className="toggler" id="toggler"></div>
            <UncontrolledCollapse toggler="#toggler">
              <div className="content"></div>
            </UncontrolledCollapse>
            <div className="toggler" id="toggler2"></div>
            <UncontrolledCollapse toggler="#toggler2">
              <div className="content"></div>
            </UncontrolledCollapse>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Services;
