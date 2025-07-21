import React from "react";
import "./accessibilitybutton.scss";

export default function AccessibilityButton({ AccessibilityIcon }) {
  return (
    <button className="accessibility-button-main">
      {AccessibilityIcon && <AccessibilityIcon />}
      <span className="accessibility-button-ring"></span>
    </button>
  );
} 