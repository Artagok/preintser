import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <div className="footer-item">
        <p>{`Copyright © ${new Date().getFullYear()} Preintser Multiserveis S.L.`}</p>
      </div>
      <div className="footer-item" style={{ padding: ".5rem 0rem" }}>
        <p>{`LoremIpsum | DolorSitAmet | ConsectateurEst`}</p>
      </div>
      <div className="footer-item">
        <a target="_blank" href="https://github.com/artagok">
          <span>{`By Artagok `}</span>
          <i className="fa fa-github-alt" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
