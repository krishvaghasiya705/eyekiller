import React from "react";
import "./homemarqueesection.scss";
import marqueelineoneimage1 from "../../../assets/image/marqueelineoneimage1.jpg";
import marqueelineoneimage2 from "../../../assets/image/marqueelineoneimage2.jpg";
import marqueelineoneimage3 from "../../../assets/image/marqueelineoneimage3.jpg";
import marqueelineoneimage4 from "../../../assets/image/marqueelineoneimage4.jpg";
import marqueelinesecondimage1 from "../../../assets/image/marqueelinesecondimage1.jpg"
import marqueelinesecondimage2 from "../../../assets/image/marqueelinesecondimage2.jpg"
import marqueelinesecondimage3 from "../../../assets/image/marqueelinesecondimage3.jpg"
import marqueelinesecondimage4 from "../../../assets/image/marqueelinesecondimage4.jpg"
import Marquee from "react-fast-marquee";

export default function Homemarqueesection() {
  return (
    <>
      <div className="home-marquee-section">
        <div className="marquee-line-first">
          <Marquee>
            <div className="home-marquee-image">
              <img src={marqueelineoneimage1} alt="marqueelineoneimage1" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelineoneimage2} alt="marqueelineoneimage2" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelineoneimage3} alt="marqueelineoneimage3" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelineoneimage4} alt="marqueelineoneimage4" />
            </div>
          </Marquee>
        </div>
        <div className="marquee-line-second">
          <Marquee direction="right">
            <div className="home-marquee-image">
              <img src={marqueelinesecondimage1} alt="marqueelinesecondimage1" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelinesecondimage2} alt="marqueelinesecondimage2" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelinesecondimage3} alt="marqueelinesecondimage3" />
            </div>
            <div className="home-marquee-image">
              <img src={marqueelinesecondimage4} alt="marqueelinesecondimage4" />
            </div> 
          </Marquee>
        </div>
      </div>
    </>
  );
}
