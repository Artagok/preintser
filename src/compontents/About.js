import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./About.css";
import ReactHtmlParser from "react-html-parser";
import rera from "../assets/img/associations/rera.png";
import rea from "../assets/img/associations/rea.png";
import ampb from "../assets/img/associations/ampb.png";
import ccb from "../assets/img/associations/ccb.png";

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
          <div className="associations-wrapper">
            <img src={rera} />
            <img src={rea} />
            <img src={ampb} />
            <img src={ccb} />
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
