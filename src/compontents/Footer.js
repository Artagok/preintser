import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Footer.css";
import certificate from "../assets/img/legal/certificate.png";

const Footer = props => {
  /* Certificate Modal */
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
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
            <pre> | </pre>
            {/* === Certificat === */}
            <span onClick={toggle}>{lang.footer.legal[3]}</span>{" "}
          </div>
          <div className="footer-item">
            <a target="_blank" href="https://github.com/artagok">
              <span>{`By Artagok `}</span>
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </a>
          </div>

          <Modal
            contentClassName="certificate-modal"
            isOpen={modal}
            toggle={toggle}
            size="lg"
          >
            <ModalBody>
              <img src={certificate} width="80%" />
            </ModalBody>
          </Modal>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Footer;
