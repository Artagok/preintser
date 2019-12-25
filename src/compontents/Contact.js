import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Contact.css";
import ReactHtmlParser from "react-html-parser";
import { Button, Row, Col } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

// Schema for Contact Form
const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "No pot ser buit")
    .max(30, "Nom massa llarg")
    .required("Aquest camp és obligatori"),
  surname: Yup.string()
    .min(1, "No pot ser buit")
    .max(60, "Cognom massa llarg")
    .required("Aquest camp és obligatori"),
  email: Yup.string()
    .email("Introdueix un correu vàlid")
    .required("Aquest camp és obligatori"),
  phone: Yup.string().matches(
    /^\+?([0-9]|\s)*$/i,
    "Introdueix un número de telèfon vàlid"
  ),
  text: Yup.string().required("Aquest camp és obligatori")
});

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
                <p>Carrer Castillejos, 202 - Local 2 08013 Barcelona</p>
                <hr></hr>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>info@reformaspreintser.es</p>
                <hr></hr>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>932 658 205</p>
              </div>
            </div>
            <div className="contact-box" id="form-wrapper">
              <h2>{lang.contact.form.title}</h2>
              <hr></hr>
              <Formik
                initialValues={{
                  name: "",
                  surname: "",
                  email: "",
                  phone: "",
                  text: ""
                }}
                validationSchema={formSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <form>
                    <Row>
                      <Col md="6" className="form-col">
                        <label htmlFor="name">{lang.contact.form.name}</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          className={
                            touched.name && errors.name ? "form-error" : null
                          }
                        />
                        <ErrorMessage name="name" />
                      </Col>
                      <Col md="6" className="form-col">
                        <label htmlFor="">{lang.contact.form.surname}</label>
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.surname}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" className="form-col">
                        <label htmlFor="email">{lang.contact.form.email}</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </Col>
                      <Col md="6" className="form-col">
                        <label htmlFor="phone">{lang.contact.form.phone}</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="form-col">
                        <label htmlFor="text">{lang.contact.form.text}</label>
                        <textarea
                          name="text"
                          id="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.text}
                        />
                      </Col>
                    </Row>
                    <button type="submit">{lang.contact.form.button}</button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

const FormError = (touched, message) => {
  return touched ? <pre>{message}</pre> : <p>NOT touched</p>;
};

export default Contact;
