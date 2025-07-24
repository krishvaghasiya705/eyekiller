import React from "react";
import "./dedicated.scss";
import Smile2icon from "../../../assets/icon/smile2icon";
import Shockicon from "../../../assets/icon/shockicon";
import Arrowicon1 from "../../../assets/icon/arrowicon1";
import Arrowicon2 from "../../../assets/icon/arrowicon2";
import Arrowicon3 from "../../../assets/icon/arrowicon3";
import Arrowicon4 from "../../../assets/icon/arrowicon4";

export default function Dedicated() {
  return (
    <>
      <div className="dedicated-section-main">
        <div className="container-sm">
          <div className="dedicated-section">
            <h2>Dedicated to delivering results for top brands</h2>
            <p>
              Collaboration is at the core of everything we do. Your goals shape
              the strategy, drive our creative innovation, and define success at
              every stage.
            </p>
            <div className="smile-icon">
              <Smile2icon />
            </div>
            <div className="shock-icon">
              <Shockicon />
            </div>
            <div className="arrowicon-one">
              <Arrowicon1 />
            </div>
            <div className="arrowicon-two">
              <Arrowicon2 />
            </div>
            <div className="arrowicon-three">
              <Arrowicon3 />
            </div>
            <div className="arrowicon-four">
              <Arrowicon4 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
