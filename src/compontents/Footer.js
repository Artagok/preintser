import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Footer.css";
import certificate from "../assets/img/legal/certificate.png";

const Footer = props => {
  /* Certificate Modal*/
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="footer-wrapper">
          <div className="footer-item">
            <p>{`Copyright © ${new Date().getFullYear()} Preintser Multiserveis S.L.U.`}</p>
          </div>
          <div className="footer-item" style={{ padding: ".5rem 0rem" }}>
            <span>{lang.footer.legal[0]}</span> {/* Avis Legal */}
            <pre> | </pre>
            <span>{lang.footer.legal[1]}</span> {/* Privacitat */}
            <pre> | </pre>
            <span>{lang.footer.legal[2]}</span> {/* Cookies */}
            <pre> | </pre>
            <span onClick={toggle}>{lang.footer.legal[3]}</span>{" "}
            {/* Certificat */}
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
