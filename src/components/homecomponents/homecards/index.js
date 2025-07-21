import React from "react";
import "./homecards.scss";
import { NavLink } from "react-router-dom";
import homecardboxvideo1 from "../../../assets/video/homecardboxvideo1.mp4";
import homecardboxvideo2 from "../../../assets/video/homecardboxvideo2.mp4";
import homecardboximg1 from "../../../assets/image/homecardboximg1.jpg";
import homecardboxvideo4 from "../../../assets/video/homecardboxvideo4.mp4";
import homecardboximg2 from "../../../assets/image/homecardboximg2.jpg";
import Awwardsicon from "../../../assets/icon/awwardsicon";
import Smilehearticon from "../../../assets/icon/smilehearticon";
import Commonbutton from "../../commonbutton";
import letstalkpeoples from "../../../assets/image/letstalkpeoples.png";

export default function Homecards() {
  return (
    <>
      <div className="home-cards-main">
        <div className="container-sm">
          <div className="home-cards">
            <div className="home-cards-left">
              <NavLink to={"/"} className="home-card-box-main">
                <div className="home-card-box-video">
                  <video autoPlay loop playsInline>
                    <source src={homecardboxvideo1} type="video/mp4" />
                  </video>
                  <div className="card-badge">
                    <Awwardsicon />
                    <span>Honorable Mention</span>
                  </div>
                </div>
                <div className="home-card-box-content">
                  <h3>Oliver Jeffers</h3>
                  <p>
                    Bringing Oliver’s world-famous art and stories to life
                    through vibrant design and creative content.
                  </p>
                </div>
              </NavLink>
              <NavLink to={"/"} className="home-card-box-main">
                <div className="home-card-box-video">
                  <img src={homecardboximg1} alt="homecardboximg1" />
                  <div className="card-badge card-badge-green">
                    <h4>114%</h4>
                    <span>More Users Converted</span>
                  </div>
                </div>
                <div className="home-card-box-content">
                  <h3>Grand Opera House</h3>
                  <p>
                    Enabling a standout user experience with flexible design and
                    powerful Spektrix integration.
                  </p>
                </div>
              </NavLink>
              <NavLink to={"/"} className="home-card-box-main">
                <div className="home-card-box-video">
                  <img src={homecardboximg2} alt="homecardboximg2" />
                </div>
                <div className="home-card-box-content">
                  <h3>Arts Council of Northern Ireland</h3>
                  <p>
                    Advancing accessibility and engagement with intuitive
                    design, inclusivity, and innovation.
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="home-cards-right">
              <NavLink to={"/"} className="home-card-box-main">
                <div className="home-card-box-video">
                  <video autoPlay loop playsInline>
                    <source src={homecardboxvideo2} type="video/mp4" />
                  </video>
                  <div className="card-badge">
                    <Awwardsicon />
                    <span>Awwwards Nominee</span>
                  </div>
                </div>
                <div className="home-card-box-content">
                  <h3>Mahlatini</h3>
                  <p>
                    Transforming a luxury travel brand with premium design,
                    seamless functionality and intelligent UX.
                  </p>
                </div>
              </NavLink>
              <NavLink to={"/"} className="home-card-box-main">
                <div className="home-card-box-video">
                  <video autoPlay loop playsInline>
                    <source src={homecardboxvideo4} type="video/mp4" />
                  </video>
                </div>
                <div className="home-card-box-content">
                  <h3>Game of Thrones Studio Tour</h3>
                  <p>
                    Reimagining an iconic attraction with immersive design,
                    storytelling, and seamless booking.
                  </p>
                </div>
              </NavLink>
              <div className="like-what-box-main">
                <div className="like-what-box-title">
                  <h5>
                    Like what you see? <Smilehearticon />
                  </h5>
                </div>
                <p>
                  Explore our portfolio and discover what we can achieve for
                  you. Let’s create something extraordinary together.
                </p>
                <div className="like-what-buttons-flx-main">
                  <Commonbutton
                    CommonbuttonLinkpath="/"
                    Commonbuttonclass="common-button-big"
                    CommonbuttonText="let's talk"
                    CommonbuttonImage={letstalkpeoples}
                  />
                  <Commonbutton
                    CommonbuttonLinkpath="/"
                    Commonbuttonclass="common-button-tr-green-outline common-button-big-sc"
                    CommonbuttonText="see all work"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
