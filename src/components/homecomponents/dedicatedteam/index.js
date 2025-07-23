import React from "react";
import "./dedicatedteam.scss";
import Diamondicon from "../../../assets/icon/diamondicon";
import Eyelookicon from "../../../assets/icon/eyelookicon";
import Marquee from "react-fast-marquee";
import Reacticon from "../../../assets/icon/reacticon";
import Commonbutton from "../../commonbutton";

export default function Dedicatedteam() {
  return (
    <>
      <div className="dedicated-team-main">
        <div className="container-lg">
          <div className="dedicated-team-title-main">
            <div className="dedicated-team-title">
              <div className="diamond-icon">
                <Diamondicon />
              </div>
              <div className="eye-icon">
                <Eyelookicon />
              </div>
              <div className="title-marquee">
                <Marquee>
                  <div className="year-flx">
                    <span>22+ years experience</span>
                    <span>22+ years experience</span>
                  </div>
                </Marquee>
              </div>
              <h3>A dedicated team of professionals</h3>
            </div>
            <p>
              Passionate, driven, and always prepared to go the extra mile, we
              bring expertise and creativity to every project, guaranteeing your
              success.
            </p>
          </div>
          <div className="dedicated-team-cards-grid">
            <div className="dedicated-team-card">
              <div className="reaction-icon">
                <Reacticon />
              </div>
              <div>
                <h4>We're about results</h4>
                <p>We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.</p>
              </div>
            </div>
            <div className="dedicated-team-card">
              <div className="reaction-icon">
                <Reacticon />
              </div>
              <div>
                <h4>Experienced Team</h4>
                <p>In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)</p>
              </div>
            </div>
            <div className="dedicated-team-card">
              <div className="reaction-icon">
                <Reacticon />
              </div>
              <div>
                <h4>Quality Assurance</h4>
                <p>We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.</p>
              </div>
            </div>
            <div className="dedicated-team-card">
              <div className="reaction-icon">
                <Reacticon />
              </div>
              <div>
                <h4>Support & Aftercare</h4>
                <p>We pride ourselves on delivering highly responsive support long after your website has been launched.</p>
              </div>
            </div>
          </div>
          <div className="button-center">
            <Commonbutton CommonbuttonText="about us" CommonbuttonLinkpath="/" Commonbuttonclass="common-button-tr-green-outline common-button-big-sc common-button-w-full"  />
          </div>
        </div>
      </div>
    </>
  );
}
