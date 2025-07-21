import React from "react";
import "./commonbutton.scss";
import { NavLink } from "react-router-dom";

export default function Commonbutton({
  CommonbuttonLinkpath,
  Commonbuttonclass,
  CommonbuttonText,
  CommonbuttonImage,
}) {
  const buttonContent = (
    <button type="button" className={`common-button ${Commonbuttonclass}`}>
      {CommonbuttonImage && (
        <img src={CommonbuttonImage} alt={CommonbuttonImage} />
      )}
      {CommonbuttonText && (
        <span className="common-button-text">{CommonbuttonText}</span>
      )}
      <span className="common-button-ring"></span>
    </button>
  );

  return CommonbuttonLinkpath === "none" ? (
    buttonContent
  ) : (
    <NavLink to={CommonbuttonLinkpath}>{buttonContent}</NavLink>
  );
}