import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Contact.css";
import ReactHtmlParser from "react-html-parser";
import { Button } from "reactstrap";

const sendMail = () => {
  window.Email.send({
    /* ===  Static === */
    Host: "smtp.gmail.com",
    Username: "preintsermultiserveis@gmail.com",
    Password: "merceIpau2015#",
    To: "linkinpau.97@gmail.com",
    /* ===  Dynamic === */
    From: "preintsermultiserveis@gmail.com",
    Subject: "AAAAAAH!",
    Body: `<b>Contacte</b>: Joan Pera <br>
    <b>Direccio</b>: C/Font 123 At 3a<br>
    <hr></hr>
    Llista<br>
    <li>
    <ul>Item1</ul>
    <ul>Item2</ul>
    </li>
    <i>Italics</i>
    `
  }).then(() => alert("mail sent successfully"));
};

const Contact = props => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="contact-wrapper" id="contact">
          <div
            style={{
              width: "calc(75% + 2rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start"
            }}
          >
            <div className="contact-box">
              <h2>{lang.contact.box.title}</h2>
              <hr></hr>
              <div className="grid-container">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>
                  Carrer Castillejos, 202 - Local 2 08013 BARCELONA (Barcelona)
                </p>
                <hr></hr>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>info@reformaspreintser.es</p>
                <hr></hr>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>932 658 205</p>
              </div>
            </div>
            <div className="contact-box" id="form-wrapper">
              aksjdkasjdsa
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Contact;
