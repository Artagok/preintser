import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Contact.css";
import ReactHtmlParser from "react-html-parser";
import {
  Row,
  Col,
  Spinner,
  UncontrolledPopover,
  // PopoverHeader,
  PopoverBody
} from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import L1 from "../assets/img/transports/L1.png";
import L2 from "../assets/img/transports/L2.png";

// Schema for Contact Form
// With language parameter to customize
// err msg depending on the language
const createFormSchema = lang => {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, lang.contact.form.errors.min)
      .max(30, lang.contact.form.errors.max)
      .required(lang.contact.form.errors.required),
    surname: Yup.string()
      .min(1, lang.contact.form.errors.empty)
      .max(60, lang.contact.form.errors.max)
      .required(lang.contact.form.errors.required),
    email: Yup.string()
      .email(lang.contact.form.errors.email)
      .required(lang.contact.form.errors.required),
    phone: Yup.string().matches(
      /^\+?([0-9]|\s)*$/i,
      lang.contact.form.errors.phone
    ),
    text: Yup.string().required(lang.contact.form.errors.required),
    checkbox: Yup.boolean().oneOf([true], lang.contact.form.errors.required)
  });
  return formSchema;
};

// Security token: 6118232d-3c76-4580-a42e-d07b5f139b7a
// This allow to encrypt the SMTP credentials and lock them to a single domain
// By default, the SMTP connection is secure (STARTTLS) and over port 25. 
const sendMail = (v, a) => {
  window.Email.send({
    /* ===  Static === */
    SecureToken: "6118232d-3c76-4580-a42e-d07b5f139b7a",
    // Host: "smtp.gmail.com",
    // Username: "preintsermultiserveis@gmail.com",
    // Password: "merceIpau2015bubos",
    // To: "reformaspreintser@gmail.com",
    To: "linkinpau.97@gmail.com",
    /* ===  Dynamic === */
    From: `${v.email}`,
    Subject: `Web Mail de ${v.name} ${v.surname}`,
    Body: `
    <b>Nombre</b>: ${v.name} <br>
    <b>Apellidos</b>: ${v.surname} <br>
    <b>Mail</b>: ${v.email} <br>
    <b>Teléfono</b>: ${v.phone || "---"} <br>
    <br><hr></hr><br>
    ${v.text.replace(/\n/gi, "<br>")}`
  })
  .then(msg => {console.log(msg); a.setSubmitting(false)})
  .catch(msg => console.log(msg));
};

// Function executed when clicking 'Submit' form button
// and all fields pass validations test
// v = values, a = actions
const onSubmit = (v, a) => {
  document.getElementById("submit-button").remove();
  document.getElementById("spinner").style.display = "";
  setTimeout(() => {
    document.getElementById("spinner").remove();
    document.getElementById("success-msg").style.display = "inline-block";
  }, 1000);
  sendMail(v, a);
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
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>reformaspreintser@gmail.com</p>
                <hr></hr>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>932 658 205</p>
                <hr></hr>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>{lang.contact.box.location1}</p>
                <p>{lang.contact.box.location2}</p>
                <a
                  id="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Reformas+Preintser+Multiservicios,+SLU./@41.4036787,2.1797739,16z/data=!4m5!3m4!1s0x12a4a2df04318e79:0xa5d6a721c64de2a7!8m2!3d41.403481!4d2.182545"
                >
                  <div id="map-link-btn">{lang.contact.box.map}</div>
                </a>
                {/* <Transports /> */}
                <hr></hr>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <p>{lang.contact.box.days}</p>
                <p>{lang.contact.box.hours1}</p>
                <p>{lang.contact.box.hours2}</p>
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
                  text: "",
                  checkbox: false
                }}
                validationSchema={createFormSchema(lang)}
                onSubmit={(values, actions) => onSubmit(values, actions)}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6" className="form-col form-col-half">
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
                        <ErrorMessage name="name" component={FormError} />
                      </Col>
                      <Col md="6" className="form-col form-col-half">
                        <label htmlFor="">{lang.contact.form.surname}</label>
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.surname}
                          className={
                            touched.surname && errors.surname
                              ? "form-error"
                              : null
                          }
                        />
                        <ErrorMessage name="surname" component={FormError} />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" className="form-col form-col-half">
                        <label htmlFor="email">{lang.contact.form.email}</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className={
                            touched.email && errors.email ? "form-error" : null
                          }
                        />
                        <ErrorMessage name="email" component={FormError} />
                      </Col>
                      <Col md="6" className="form-col form-col-half">
                        <label htmlFor="phone">{lang.contact.form.phone}</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          placeholder={lang.contact.form.optional}
                          className={
                            touched.phone && errors.phone ? "form-error" : null
                          }
                        />
                        <ErrorMessage name="phone" component={FormError} />
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
                          className={
                            touched.text && errors.text ? "form-error" : null
                          }
                        />
                        <ErrorMessage name="text" component={FormError} />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="form-col">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "baseline",
                            marginTop: "1rem",
                            textAlign: "left"
                          }}
                        >
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.checkbox}
                            className={
                              touched.checkbox && errors.checkbox
                                ? "form-error"
                                : null
                            }
                          />
                          <p style={{ fontSize: "1rem" }}>
                            {lang.contact.form.checkbox}
                            <span id="checkbox-tooltip">
                              {lang.contact.form.checkbox_span}
                            </span>
                          </p>
                          <UncontrolledPopover
                            trigger="legacy"
                            placement="auto-end"
                            target="checkbox-tooltip"
                          >
                            <PopoverBody>
                              {ReactHtmlParser(
                                lang.contact.form.checkbox_tooltip
                              )}
                            </PopoverBody>
                          </UncontrolledPopover>
                        </div>
                        <ErrorMessage name="checkbox" component={FormError} />
                      </Col>
                    </Row>
                    <button type="submit" id="submit-button">
                      {lang.contact.form.button}
                    </button>
                  </form>
                )}
              </Formik>
              <Spinner id="spinner" color="dark" style={{ display: "none" }} />
              <span id="success-msg" style={{ display: "none" }}>
                {lang.contact.form.success_msg}
              </span>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

const FormError = props => (
  <p
    style={{
      fontSize: "1rem",
      color: "#b30000",
      textShadow: ".5px .5px darkred"
    }}
  >
    {props.children}
  </p>
);

const Transports = () => {
  return (
    <div>
      <Row noGutters={true}>
        <Col lg="6">
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: ".7rem"
            }}
          >
            Metro
          </p>
          <img src={L1} alt=""/>
          <p style={{ fontSize: "1rem", marginBottom: ".7rem" }}>Glòries</p>
          <img src={L2} alt=""/>
          <p style={{ fontSize: "1rem" }}>Encants</p>
          <p style={{ fontSize: "1rem" }}>Monumental</p>
        </Col>
        <Col lg="6">
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: ".7rem"
            }}
          >
            Bus
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                backgroundColor: "rgb(119,221,119)",
                border: "1px solid black",
                padding: "0.2rem 0.2rem",
                marginBottom: ".5rem"
              }}
            >
              V23
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                backgroundColor: "rgb(255,105,97)",
                border: "1px solid black",
                padding: "0.2rem 0.55rem"
              }}
            >
              62
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
