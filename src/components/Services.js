import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import { UncontrolledCollapse, Collapse, Row, Col } from "reactstrap";
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
      ? a
          .slice(0, Math.ceil(a.length / 2))
          .map(s => <p key={s.toLowerCase().replace(/\s/gi, "")}>{s}</p>)
      : a
          .slice(Math.ceil(a.length / 2), a.length)
          .map(s => <p key={s.toLowerCase().replace(/\s/gi, "")}>{s}</p>);
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
            <Collapse isOpen={angles[0].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._1.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._1.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 2 - Reparaciones ======*/}
            <div className="toggler" id="toggler2" onClick={() => setAngle(2)}>
              <h2>{lang.services._2.name}</h2>
              <i className={`fa fa-angle-down ${angles[1]}`}></i>
            </div>
            <Collapse isOpen={angles[1].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._2.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._2.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 3 - Colocacion de Pavimentos ======*/}
            <div className="toggler" id="toggler3" onClick={() => setAngle(3)}>
              <h2>{lang.services._3.name}</h2>
              <i className={`fa fa-angle-down ${angles[2]}`}></i>
            </div>
            <Collapse isOpen={angles[2].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._3.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._3.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 4 - Reformas ======*/}
            <div className="toggler" id="toggler4" onClick={() => setAngle(4)}>
              <h2>{lang.services._4.name}</h2>
              <i className={`fa fa-angle-down ${angles[3]}`}></i>
            </div>
            <Collapse isOpen={angles[3].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._4.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._4.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 5 - Aplicacion de Revestimientos ======*/}
            <div className="toggler" id="toggler5" onClick={() => setAngle(5)}>
              <h2>{lang.services._5.name}</h2>
              <i className={`fa fa-angle-down ${angles[4]}`}></i>
            </div>
            <Collapse isOpen={angles[4].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._5.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._5.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 6 - Pintura ======*/}
            <div className="toggler" id="toggler6" onClick={() => setAngle(6)}>
              <h2>{lang.services._6.name}</h2>
              <i className={`fa fa-angle-down ${angles[5]}`}></i>
            </div>
            <Collapse isOpen={angles[5].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._6.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._6.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 7 - Instalacion y legalizacion de servicios ======*/}
            <div className="toggler" id="toggler7" onClick={() => setAngle(7)}>
              <h2>{lang.services._7.name}</h2>
              <i className={`fa fa-angle-down ${angles[6]}`}></i>
            </div>
            <Collapse isOpen={angles[6].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col md="6">{mapService(lang.services._7.list, 0)}</Col>
                  <Col md="6">{mapService(lang.services._7.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
            {/*====== 8 - Servicios Complementarios ======*/}
            <div className="toggler" id="toggler8" onClick={() => setAngle(8)}>
              <h2>{lang.services._8.name}</h2>
              <i className={`fa fa-angle-down ${angles[7]}`}></i>
            </div>
            <Collapse isOpen={angles[7].length > 0}>
              <div className="content">
                <Row noGutters={true}>
                  <Col lg="6">{mapService(lang.services._8.list, 0)}</Col>
                  <Col lg="6">{mapService(lang.services._8.list, 1)}</Col>
                </Row>
              </div>
            </Collapse>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Services;
