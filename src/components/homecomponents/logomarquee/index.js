import React from "react";
import "./logomarquee.scss";
import Logomarqueeimg1 from "../../../assets/icon/logomarqueeimg1";
import Logomarqueeimg2 from "../../../assets/icon/logomarqueeimg2";
import Logomarqueeimg3 from "../../../assets/icon/logomarqueeimg3.png";
import Logomarqueeimg4 from "../../../assets/icon/logomarqueeimg4";
import Logomarqueeimg5 from "../../../assets/icon/logomarqueeimg5";
import Logomarqueeimg6 from "../../../assets/icon/logomarqueeimg6";
import Logomarqueeimg7 from "../../../assets/icon/logomarqueeimg7";
import Logomarqueeimg8 from "../../../assets/icon/logomarqueeimg8";
import Logomarqueeimg9 from "../../../assets/icon/logomarqueeimg9.png";
import Logomarqueeimg10 from "../../../assets/icon/logomarqueeimg10";
import Logomarqueeimg11 from "../../../assets/icon/logomarqueeimg11";
import Logomarqueeimg12 from "../../../assets/icon/logomarqueeimg12";
import Logomarqueeimg13 from "../../../assets/icon/logomarqueeimg13";
import Logomarqueeimg14 from "../../../assets/icon/logomarqueeimg14";
import Logomarqueeimg15 from "../../../assets/icon/logomarqueeimg15";
import Logomarqueeimg16 from "../../../assets/icon/logomarqueeimg16";
import Logomarqueeimg17 from "../../../assets/icon/logomarqueeimg17";
import Marquee from "react-fast-marquee";

export default function Logomarquee() {
  return (
    <>
      <div className="logo-marquee-main">
        <Marquee>
          <div className="logo-marquee">
            <Logomarqueeimg1 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg2 />
          </div>
          <div className="logo-marquee">
            <img src={Logomarqueeimg3} alt="Logomarqueeimg3" />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg4 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg5 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg6 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg7 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg8 />
          </div>
          <div className="logo-marquee">
            <img src={Logomarqueeimg9} alt="Logomarqueeimg9" />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg10 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg11 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg12 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg13 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg14 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg15 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg16 />
          </div>
          <div className="logo-marquee">
            <Logomarqueeimg17 />
          </div>
        </Marquee>
      </div>
    </>
  );
}
