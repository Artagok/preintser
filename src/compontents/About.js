import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./About.css";
import ReactHtmlParser from "react-html-parser";

const About = props => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="about-wrapper" id="about">
          <div className="text-box-wrapper">
            <TextBox>
              <h2>{ReactHtmlParser(lang.about.textbox1.title)}</h2>
              <hr></hr>
              <p>{ReactHtmlParser(lang.about.textbox1.content1)}</p>
              <p>{ReactHtmlParser(lang.about.textbox1.content2)}</p>
            </TextBox>
            <TextBox>
              <h2>{ReactHtmlParser(lang.about.textbox2.title)}</h2>
              <hr></hr>
              <p>{ReactHtmlParser(lang.about.textbox2.content1)}</p>
              <p>{ReactHtmlParser(lang.about.textbox2.content2)}</p>
            </TextBox>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default About;

const TextBox = props => {
  return <div className="text-box">{props.children}</div>;
};
