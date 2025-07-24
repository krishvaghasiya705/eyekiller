import React from "react";
import "./trustedpartners.scss";
import trustedpartnerimage from "../../../assets/image/trustedpartnerimage.webp";
import { NavLink } from "react-router-dom";

export default function Trustedpartners() {
  return (
    <>
      <div className="trusted-partners">
        <div className="container-xs">
          <div className="trusted-partners-grid">
            <div className="trusted-partners-grid-img">
              <img src={trustedpartnerimage} alt="trustedpartnerimage" />
            </div>
            <div className="trusted-partners-grid-right">
              <h4>Your trusted digital partner</h4>
              <div className="trusted-partners-grid-right-content">
                <p>
                  We are a leading digital agency in Northern Ireland, serving
                  businesses across Belfast, Ireland, the UK, North America and
                  beyond. We are dedicated to delivering exceptional{" "}
                  <NavLink to={"/"}>web design</NavLink>,
                  <NavLink to={"/"}>website development</NavLink>, and{" "}
                  <NavLink to={"/"}>digital marketing</NavLink> solutions that
                  are tailored to your unique needs.
                </p>
                <p>
                  Since 2003, we've built a reputation for excellence,
                  transforming global brands with innovative digital strategies.
                  We specialise in creating visually stunning websites,
                  data-driven marketing, and scalable development solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
