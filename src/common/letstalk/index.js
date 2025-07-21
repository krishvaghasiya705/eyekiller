import React, { useEffect, useState } from "react";
import "./letstalk.scss";
import Bubbleicon from "../../assets/icon/bubbleicon";

export default function Letstalk() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= docHeight - 1;

      if (isAtBottom) {
        setIsVisible(false);
      } else if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainClass = `lets-talk-circle-main ${isVisible ? "lets-talk-circle-visible" : "lets-talk-circle-hidden"}`;

  return (
    <>
      <div className={mainClass}>
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
    </>
  );
}
