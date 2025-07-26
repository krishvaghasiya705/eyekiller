import React, { useEffect, useState } from "react";
import "./letstalkmodal.scss";
import Logo from "../../assets/icon/logo";
import { NavLink } from "react-router-dom";
import Closeicon from "../../assets/icon/closeicon";
import Smileicon3 from "../../assets/icon/smileicon3";
import Facebookicon from "../../assets/icon/facebookicon";
import Twittericon from "../../assets/icon/twittericon";
import Instagramicon from "../../assets/icon/instagramicon";
import Linkedinicon from "../../assets/icon/linkedinicon";
import Commonbutton from "../commonbutton";

export default function Letstalkmodal({ active, onClose }) {
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
        className={`letstalk-modal-bg ${
          active ? "letstalk-modal-bg-active" : ""
        }`}
      ></div>
      {showContent && (
        <div className={`letstalk-modal-main ${showContent ? "letstalk-modal-main-active" : ""}`}>
          <div className="letstalk-modal">
            <div className="container-xxl">
              <div className="letstalk-modal-header">
                <NavLink
                  to={"/"}
                  className="letstalk-modal-logo"
                  onClick={onClose}
                >
                  <Logo />
                </NavLink>
                <div className="letstalk-modal-close" onClick={onClose}>
                  <Closeicon />
                  <span className="closeicon-layer"></span>
                </div>
              </div>
            </div>
            <div className="container-xs">
              <div className="letstalk-modal-body">
                <div className="letstalk-modal-body-left">
                  <div className="letstalk-body-left-title">
                    <span className="contact-ticket">Contact</span>
                    <h1>
                      Let's Work Together{" "}
                      <span>
                        <Smileicon3 />
                      </span>
                    </h1>
                    <p>
                      Are you looking for a digital partner to help with with
                      your digital strategy, UX, web presence or digital
                      marketing activity?
                    </p>
                  </div>
                  <div className="letstalk-body-left-footer">
                    <div className="letstalk-body-left-footer-grd">
                      <div className="letstalk-body-left-footer-item">
                        <h2>Give us a call</h2>
                        <a href="tel:+442891462888">+44 (0)28 9146 2888</a>
                      </div>
                      <div className="letstalk-body-left-footer-item">
                        <h2>Send us an email</h2>
                        <a href="mailto: hello@eyekiller.com">
                          hello@eyekiller.com
                        </a>
                      </div>
                      <div className="letstalk-body-left-footer-item">
                        <h2>Join Us</h2>
                        <NavLink to="/careers">See Vacancies</NavLink>
                      </div>
                    </div>
                    <div className="letstalk-body-social-links">
                      <a href="https://facebook.com/eyekiller" target="__blank">
                        <Facebookicon width="12" height="22" />
                      </a>
                      <a href="https://twitter.com/eyekiller" target="__blank">
                        <Twittericon width="17" height="18" />
                      </a>
                      <a
                        href="https://instagram.com/weareeyekiller"
                        target="__blank"
                      >
                        <Instagramicon width="19" height="20" />
                      </a>
                      <a
                        href="https://linkedin.com/company/eyekiller"
                        target="__blank"
                      >
                        <Linkedinicon width="18" height="19" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="letstalk-modal-body-right">
                  <form>
                    <h3>Get in touch</h3>
                    <div className="form-grd">
                      <div className="form-grd-items">
                        <label htmlFor="name">full name</label>
                        <input type="text" id="name" />
                      </div>
                      <div className="form-grd-items">
                        <label htmlFor="email">email address</label>
                        <input type="email" id="email" />
                      </div>
                      <div className="form-grd-items">
                        <label htmlFor="tel">Phone Number (Optional)</label>
                        <input type="tel" id="tel" />
                      </div>
                      <div className="form-grd-items">
                        <label htmlFor="select">
                          How did you hear about us?
                        </label>
                        <select id="select">
                          <option selected value="">
                            Please Select
                          </option>
                          <option value="Google">Google</option>
                          <option value="Friend or family">
                            Friend or family
                          </option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="AI Search (Chat GPT etc)">
                            AI Search (Chat GPT etc)
                          </option>
                          <option value="Word of mouth">Word of mouth</option>
                          <option value="Newsletter">Newsletter</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-textare-main">
                      <label htmlFor="textarea">How can we help?</label>
                      <textarea id="textarea"></textarea>
                    </div>
                    <div className="subscribe-line-main">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        Subscribe for the latest news and insights delivered to
                        your inbox
                      </label>
                    </div>
                    <div className="send-msg-main">
                      <div className="send-msg-button">
                        <Commonbutton
                          CommonbuttonText="Send Message"
                          Commonbuttonclass="common-button-black common-button-ring-hide common-button-big-three common-button-w-full"
                        />
                      </div>
                      <p>
                        By submitting this form I accept the{" "}
                        <NavLink to={"/"}>Privacy Policy</NavLink> of this site.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
