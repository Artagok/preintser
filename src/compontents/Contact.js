import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Contact.css";
import ReactHtmlParser from "react-html-parser";
import { Button, Row, Col, Spinner } from "reactstrap";
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

const sendMail = (v, a) => {
  const format_text = v.text.replace(/\n/gi, "<br>");
  window.Email.send({
    /* ===  Static === */
    Host: "smtp.gmail.com",
    Username: "preintsermultiserveis@gmail.com",
    Password: "merceIpau2015#",
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
  }).then(() => a.setSubmitting(false));
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
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>Carrer Castillejos, 202 - Local 2 08013 Barcelona</p>
                <hr></hr>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>info@reformaspreintser.es</p>
                <hr></hr>
                <i className="fa fa-phone" aria-hidden="true"></i>
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
                        <ErrorMessage name="name" component={FormError} />
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
                      <Col md="6" className="form-col">
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
                      <Col md="6" className="form-col">
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
  <p style={{ fontSize: "1rem", color: "red" }}>{props.children}</p>
);

export default Contact;
