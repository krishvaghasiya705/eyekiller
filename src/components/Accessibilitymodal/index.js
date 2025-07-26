import React, { useEffect, useState } from "react";
import "./accessibilitymodal.scss";
import Closeicon from "../../assets/icon/closeicon";
import Logo from "../../assets/icon/logo";
import { NavLink } from "react-router-dom";
import Commonbutton from "../commonbutton";

export default function Accessibilitymodal({ active, onClose }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer;
    if (active) {
      timer = setTimeout(() => setShowContent(true), 1750);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [active]);
  return (
    <>
      <div
        className={`accessibility-modal-layer ${
          active ? "accessibility-modal-layer-active" : ""
        }`}
      ></div>
      {showContent && (
        <div
          className={`accessibility-modal-main ${
            showContent ? "accessibility-modal-main-active" : ""
          }`}
        >
          <div className="accessibility-modal">
            <div className="container-xxl">
              <div className="accessibility-modal-header">
                <NavLink
                  to={"/"}
                  className="accessibility-modal-logo"
                  onClick={onClose}
                >
                  <Logo />
                </NavLink>
                <div className="accessibility-modal-close" onClick={onClose}>
                  <Closeicon />
                  <span className="closeicon-layer"></span>
                </div>
              </div>
            </div>
            <div className="container-xs">
              <div className="accessibility-modal-body">
                <div className="accessibility-modal-left">
                  <h1>Accessibility Preferences</h1>
                  <p>
                    This site has animations and videos which play automatically
                    - You can control how this works with the checkbox below.
                  </p>
                  <div className="show-animation-line-main">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">show animations</label>
                  </div>
                  <div className="update-pref-button">
                    <Commonbutton
                      CommonbuttonText="Update Preference"
                      Commonbuttonclass="common-button-black common-button-ring-hide common-button-big-four common-button-w-full"
                    />
                  </div>
                  <div className="accessibility-links">
                    <NavLink to={"/"}>
                      <span>Accessibility Statement</span>
                    </NavLink>
                    <NavLink to={"/"}>
                      <span>Contact</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
