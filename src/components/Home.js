import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import preintser1 from "../assets/img/carousel/preintser1.jpg";
import preintser2 from "../assets/img/carousel/preintser2.jpg";
import preintser3 from "../assets/img/carousel/preintser3.jpg";
import preintser4 from "../assets/img/carousel/preintser4.jpg";
import preintser5 from "../assets/img/carousel/preintser5.jpg";
import { MD_BREAKPOINT } from "../const.js";

const Home = ({ size }) => {
  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="home-wrapper" id="home">
          {/* <h2>{lang.home.title}</h2> */}
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={size.w >= MD_BREAKPOINT}
            infiniteLoop={true}
            width={size.w >= MD_BREAKPOINT ? "75%" : "95%"}
            autoPlay={true}
            stopOnHover={false}
            interval={4500}
            transitionTime={1000}
            className="carousel-wrapper"
          >
            <div>
              <img alt="" src={preintser4} />
            </div>
            <div>
              <img alt="" src={preintser5} />
            </div>
            <div>
              <img alt="" src={preintser1} />
            </div>
            <div>
              <img alt="" src={preintser2} />
            </div>
            <div>
              <img alt="" src={preintser3} />
            </div>
          </Carousel>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Home;
