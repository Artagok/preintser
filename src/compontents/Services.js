import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import { UncontrolledCollapse, Row, Col } from "reactstrap";
import "./Services.css";

const Services = props => {
  const [angles, setAngles] = useState(["", "", "", "", "", "", "", ""]);
  // Toggle specific fa-angle
  const setAngle = i => {
    let arr = [...angles];
    arr[i - 1] = arr[i - 1] ? "" : "open";
    setAngles(arr);
  };

  const mapService = (a, h) => {
    // Return first half or second half
    // of the array passed by param
    // mapped to <p>s</p>
    return !h
      ? a.slice(0, Math.ceil(a.length / 2)).map(s => <p>{s}</p>)
      : a.slice(Math.ceil(a.length / 2), a.length).map(s => <p>{s}</p>);
  };

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="services-wrapper" id="services">
          <div className="accordion-wrapper">
            {/*====== 1 - Rehabilitacion y restauracion ======*/}
            <div className="toggler" id="toggler1" onClick={() => setAngle(1)}>
              <h2>{lang.services._1.name}</h2>
              <i className={`fa fa-angle-down ${angles[0]}`}></i>
            </div>
            <UncontrolledCollapse toggler="#toggler1">
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._1.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._1.list, 1)}</Col>
                </Row>
              </div>
            </UncontrolledCollapse>
            {/*====== 2 - Reparaciones ======*/}
            <div className="toggler" id="toggler2" onClick={() => setAngle(2)}>
              <h2>{lang.services._2.name}</h2>
              <i className={`fa fa-angle-down ${angles[1]}`}></i>
            </div>
            <UncontrolledCollapse toggler="#toggler2">
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._2.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._2.list, 1)}</Col>
                </Row>
              </div>
            </UncontrolledCollapse>
            {/*====== 3 - Colocacion de Pavimentos ======*/}
            <div className="toggler" id="toggler3" onClick={() => setAngle(3)}>
              <h2>{lang.services._3.name}</h2>
              <i className={`fa fa-angle-down ${angles[2]}`}></i>
            </div>
            <UncontrolledCollapse toggler="#toggler3">
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._3.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._3.list, 1)}</Col>
                </Row>
              </div>
            </UncontrolledCollapse>
            {/*====== 4 - Reformas ======*/}
            <div className="toggler" id="toggler4" onClick={() => setAngle(4)}>
              <h2>{lang.services._4.name}</h2>
              <i className={`fa fa-angle-down ${angles[3]}`}></i>
            </div>
            <UncontrolledCollapse toggler="#toggler4">
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._4.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._4.list, 1)}</Col>
                </Row>
              </div>
            </UncontrolledCollapse>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Services;
