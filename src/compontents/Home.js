import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img/carousel/img1.jpg";
import img2 from "../assets/img/carousel/img2.jpg";
import img3 from "../assets/img/carousel/img3.jpg";
import img4 from "../assets/img/carousel/img4.jpg";
import preintser1 from "../assets/img/carousel/preintser1.jpg";
import preintser2 from "../assets/img/carousel/preintser2.jpg";
import preintser3 from "../assets/img/carousel/preintser3.jpg";


const Home = props => {
  return (
    <div className="home-wrapper" id="home">
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
          <img alt="" src={preintser1} />
        </div>
        <div>
          <img alt="" src={preintser2} />
        </div>
        <div>
          <img alt="" src={preintser3} />
        </div>
        {/* <div>
          <img alt="" src={img4} />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Home;
