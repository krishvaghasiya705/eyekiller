import React, { useEffect, useState } from "react";
import "./header.scss";
import Logo from "../../assets/icon/logo";
import { NavLink } from "react-router-dom";
import Accessibilityicon from "../../assets/icon/accessibilityicon";
import Commonbutton from "../../components/commonbutton";
import AccessibilityButton from "../../components/AccessibilityButton/AccessibilityButton";
import Accessibilitymodal from "../../components/Accessibilitymodal";

export default function Header() {
  const [isMini, setIsMini] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Custom event name for accessibility modal state
  const ACCESSIBILITY_MODAL_EVENT = "accessibility-modal-state";

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent(ACCESSIBILITY_MODAL_EVENT, { detail: true }));
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent(ACCESSIBILITY_MODAL_EVENT, { detail: false }));
    }
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent(ACCESSIBILITY_MODAL_EVENT, { detail: false }));
    };
  }, [modalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsMini(true);
      } else {
        setIsMini(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header-main">
        <div className={`header${isMini ? " header-mini" : ""}`}>
          <div className="header-logo">
            <NavLink to={"/"}>
              <Logo />
            </NavLink>
          </div>
          <div className="header-links">
            <NavLink to={"/"}>
              <span className="header-link-text">Work</span>
            </NavLink>
            <NavLink to={"/"}>
              <span className="header-link-text">Services</span>
            </NavLink>
            <NavLink to={"/"}>
              <span className="header-link-text">About</span>
            </NavLink>
            <NavLink to={"/"}>
              <span className="header-link-text">Blog</span>
            </NavLink>
            <NavLink to={"/"}>
              <span className="header-link-text">Careers</span>
              <span className="header-link-notification">1</span>
            </NavLink>
          </div>
          <div className="header-right">
            <div onClick={() => setModalOpen(true)}>
              <AccessibilityButton AccessibilityIcon={Accessibilityicon} />
            </div>
            <Commonbutton
              CommonbuttonText="Let's Talk"
              CommonbuttonLinkpath="/"
            />
          </div>
        </div>
      </header>
      <Accessibilitymodal
        active={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
