import React from "react";
import "./footer.scss";
import Smile2icon from "./../../assets/icon/smile2icon";
import Commonbutton from "../../components/commonbutton";
import letstalkpeoples from "../../assets/image/letstalkpeoples.png";
import { NavLink } from "react-router-dom";
import Facebookicon from "../../assets/icon/facebookicon";
import Twittericon from "../../assets/icon/twittericon";
import Instagramicon from "../../assets/icon/instagramicon";
import Linkedinicon from "../../assets/icon/linkedinicon";
import Googlereviewicon from "../../assets/icon/googlereviewicon";

export default function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="container-xl">
          <div className="footer">
            <div className="container-smx">
              <div className="footer-grid">
                <div className="footer-grid-left">
                  <h1>
                    Let's work together{" "}
                    <span>
                      <Smile2icon />
                    </span>
                  </h1>
                  <Commonbutton
                    CommonbuttonLinkpath="/"
                    Commonbuttonclass="common-button-big"
                    CommonbuttonText="let's talk"
                    CommonbuttonImage={letstalkpeoples}
                  />
                </div>
                <div className="footer-grid-right">
                  <div className="footer-grid-right-flx">
                    <div className="footer-flx-left">
                      <h2>Explore</h2>
                      <div className="footer-links">
                        <NavLink to={"/"}>
                          <span>Work</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>Services</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>About</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>Blog</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>Careers</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>Reviews</span>
                        </NavLink>
                        <NavLink to={"/"}>
                          <span>Contact</span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="footer-flx-right">
                      <h2>Say Hello</h2>
                      <div className="footer-email-links">
                        <a href="tel:+442891462888" target="__blank">
                          <span>+44 (0)28 9146 2888</span>
                        </a>
                        <a href="mailto: hello@eyekiller.com" target="__blank">
                          <span>hello@eyekiller.com</span>
                        </a>
                      </div>
                      <div className="footer-social-links">
                        <a
                          href="https://facebook.com/eyekiller"
                          target="__blank"
                        >
                          <Facebookicon />
                        </a>
                        <a
                          href="https://twitter.com/eyekiller"
                          target="__blank"
                        >
                          <Twittericon />
                        </a>
                        <a
                          href="https://instagram.com/weareeyekiller"
                          target="__blank"
                        >
                          <Instagramicon />
                        </a>
                        <a
                          href="https://linkedin.com/company/eyekiller"
                          target="__blank"
                        >
                          <Linkedinicon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-copyright-main">
                <div className="footer-copyright-flx">
                  <p>© 2025 Eyekiller Ltd</p>
                  <p>Company Reg Number NI045770</p>
                  <NavLink to={"/"}>Accessibility Statement</NavLink>
                  <NavLink to={"/"}>Privacy Policy</NavLink>
                  <NavLink to={"/"}>Cookie Policy</NavLink>
                  <NavLink to={"/"}>Manage Cookies</NavLink>
                </div>
                <div className="google-reviews">
                  <a
                    href="https://www.google.com/maps/place/Eyekiller/@54.6593766,-5.6734511,17z/data=!4m8!3m7!1s0x48619e220ac2b569:0x81fac434cd1bae2d!8m2!3d54.6593735!4d-5.6708708!9m1!1b1!16s%2Fg%2F1td4jjrm?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="__blank"
                  >
                    <Googlereviewicon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
