import React from "react";
import "./herobanner.scss";
import Smileicon from "../../../assets/icon/smileicon";
import herobanerimg1 from "../../../assets/image/herobanerimg1.jpg"
import herobanerimg2 from "../../../assets/image/herobanerimg2.jpg"
import herobanerimg3 from "../../../assets/image/herobanerimg3.jpg"
import herobanerimg4 from "../../../assets/video/herobanerimg4.mp4"
import herobanerimg5 from "../../../assets/image/herobanerimg5.jpg"
import herobanerimg6 from "../../../assets/image/herobanerimg6.jpg"

export default function Herobanner() {
  return (
    <>
      <section className="herobanner-main">
        <div className="container">
          <div className="herobanner-inner-rel-main">
            <div className="herobanner-inner">
              <h1>Exceptional <span>Digital <Smileicon /></span> Experiences</h1>
              <p>Driving growth for leading brands and organisations through high-performing websites and results-driven digital marketing.</p>
            </div>
            <div className="herobaner-img-1">
                <img src={herobanerimg1} alt="herobanerimg1" />
            </div>
            <div className="herobaner-img-2">
                <img src={herobanerimg2} alt="herobanerimg2" />
            </div>
            <div className="herobaner-img-3">
                <img src={herobanerimg3} alt="herobanerimg3" />
            </div>
            <div className="herobaner-img-4">
                <video autoPlay loop playsInline>
                    <source src={herobanerimg4} type="video/mp4"/>
                </video>
            </div>
            <div className="herobaner-img-5">
                <img src={herobanerimg5} alt="herobanerimg5" />
            </div>
            <div className="herobaner-img-6">
                <img src={herobanerimg6} alt="herobanerimg6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
