import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LangContext, langs } from "../lang-context";

import "./NotFound.css";

const NotFound = () => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="notfound-wrapper">
          <h1>{`404: ${lang.notFound.h1}`}</h1>
          <h3>{lang.notFound.h3}</h3>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginTop: "2rem",
            }}
          >
            <i className="fa fa-home" />
            <h5>
              {lang.notFound.link[0]}
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                {lang.notFound.link[1]}
              </Link>
              {lang.notFound.link[2]}
            </h5>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default NotFound;
