import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = props => {
  return (
    <div className="home-wrapper" id="section1">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={true}
        infiniteLoop={true}
        width={"75%"}
        autoPlay={true}
        stopOnHover={false}
        interval={4500}
        transitionTime={1000}
        className="carousel-wrapper"
      >
        <div>
          <img src="https://picsum.photos/id/101/2621/1747" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1015/6000/4000" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1016/3844/2563" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
