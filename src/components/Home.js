import React, { useState, useEffect } from "react";
import { LangContext } from "../lang-context";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { MD_BREAKPOINT } from "../const.js";

// === Carousel Images === //
// lg (large) - 1920w
import carousel_1_lg from "../assets/img/carousel/lg/carousel-1-lg.jpg";
import carousel_2_lg from "../assets/img/carousel/lg/carousel-2-lg.jpg";
import carousel_3_lg from "../assets/img/carousel/lg/carousel-3-lg.jpg";
import carousel_4_lg from "../assets/img/carousel/lg/carousel-4-lg.jpg";
import carousel_5_lg from "../assets/img/carousel/lg/carousel-5-lg.jpg";
// md (medium) - 960w
import carousel_1_md from "../assets/img/carousel/md/carousel-1-md.jpg";
import carousel_2_md from "../assets/img/carousel/md/carousel-2-md.jpg";
import carousel_3_md from "../assets/img/carousel/md/carousel-3-md.jpg";
import carousel_4_md from "../assets/img/carousel/md/carousel-4-md.jpg";
import carousel_5_md from "../assets/img/carousel/md/carousel-5-md.jpg";
// sm (small) - 480w
import carousel_1_sm from "../assets/img/carousel/sm/carousel-1-sm.jpg";
import carousel_2_sm from "../assets/img/carousel/sm/carousel-2-sm.jpg";
import carousel_3_sm from "../assets/img/carousel/sm/carousel-3-sm.jpg";
import carousel_4_sm from "../assets/img/carousel/sm/carousel-4-sm.jpg";
import carousel_5_sm from "../assets/img/carousel/sm/carousel-5-sm.jpg";

const CAROUSEL_IMAGES = {
  lg: [
    carousel_1_lg,
    carousel_2_lg,
    carousel_3_lg,
    carousel_4_lg,
    carousel_5_lg,
  ],
  md: [
    carousel_1_md,
    carousel_2_md,
    carousel_3_md,
    carousel_4_md,
    carousel_5_md,
  ],
  sm: [
    carousel_1_sm,
    carousel_2_sm,
    carousel_3_sm,
    carousel_4_sm,
    carousel_5_sm,
  ],
};

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
            thumbWidth={100}
            infiniteLoop={true}
            width={size.w >= MD_BREAKPOINT ? "75%" : "95%"}
            autoPlay={true}
            stopOnHover={false}
            interval={4500}
            transitionTime={1000}
            className="carousel-wrapper"
          >
            {CAROUSEL_IMAGES.lg.map((lg, i) => (
              <div key={i}>
                <img
                  alt={`carousel-${i + 1}`}
                  src={lg}
                  srcSet={`${lg} 1920w, ${CAROUSEL_IMAGES.md[i]} 960w, ${CAROUSEL_IMAGES.sm[i]} 480w`}
                  sizes="(max-width: 768px) 95vw, 75vw"
                  className="carousel-img"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Home;
