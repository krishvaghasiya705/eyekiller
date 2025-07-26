import React, { useEffect, useState } from "react";
import "./letstalk.scss";
import Bubbleicon from "../../assets/icon/bubbleicon";
import Letstalkmodal from "../../components/letstalkmodal";

const ACCESSIBILITY_MODAL_EVENT = "accessibility-modal-state";

export default function Letstalk() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [accessibilityModalOpen, setAccessibilityModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    const handler = (e) => {
      setAccessibilityModalOpen(!!e.detail);
    };
    window.addEventListener(ACCESSIBILITY_MODAL_EVENT, handler);
    return () => window.removeEventListener(ACCESSIBILITY_MODAL_EVENT, handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= docHeight - 1;

      if (isAtBottom || accessibilityModalOpen) {
        setIsVisible(false);
      } else if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [accessibilityModalOpen]);

  const mainClass = `lets-talk-circle-main ${
    isVisible && !modalOpen && !accessibilityModalOpen ? "lets-talk-circle-visible" : "lets-talk-circle-hidden"
  }`;

  return (
    <>
      {!accessibilityModalOpen && (
        <div
          className={mainClass}
          onClick={() => setModalOpen(true)}
        >
          <div className="lets-talk-circle">
            <div className="bubble-icon">
              <Bubbleicon />
            </div>
            <div className="bubble-text">
              <span>Let's</span>
            </div>
            <div className="bubble-text">
              <span>Talk</span>
            </div>
          </div>
        </div>
      )}
      <Letstalkmodal active={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
