import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import "./Footer.css";
import webseal from "../assets/img/legal/webseal.png";

const Footer = props => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <React.Fragment>
          <div className="webseal-wrapper">
            <a 
              target="_blank" 
              href="https://www.expertoslopd.es/web-certificada/reformas-preintser/" 
              rel="noopener noreferrer"
            >
              <img src={webseal} alt="" id="webseal" />
            </a>
          </div>
          <div className="footer-wrapper">
            <div className="footer-item">
              <p>{`Copyright © ${new Date().getFullYear()} Preintser Multiservicios S.L.U.`}</p>
            </div>
            <div className="footer-item" style={{ padding: ".5rem 0rem" }}>
              {/* === Avis Legal === */}
              <Link to="/legal" onClick={() => window.scrollTo(0, 0)}>
                <span>{lang.footer.legal[0]}</span>
              </Link>{" "}
              <pre> | </pre>
              {/* === Privacitat === */}
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                <span>{lang.footer.legal[1]}</span>{" "}
              </Link>
              <pre> | </pre>
              {/* === Cookies === */}
              <Link to="/cookies" onClick={() => window.scrollTo(0, 0)}>
                <span>{lang.footer.legal[2]}</span>
              </Link>
              {/* <pre> | </pre> */}
              {/* === Certificat === */}
              {/* <span onClick={toggle}>{lang.footer.legal[3]}</span>{" "} */}
            </div>
            <div className="footer-item">
              <a target="_blank" href="https://github.com/artagok" rel="noopener noreferrer">
                <span>{`By Artagok `}</span>
                <i className="fa fa-github-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div> 
        </React.Fragment>
      )}
    </LangContext.Consumer>
  );
};

export default Footer;
