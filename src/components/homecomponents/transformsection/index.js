import React from "react";
import "./transformsection.scss";
import Pinkunderline from "../../../assets/icon/pinkunderline";
import { NavLink } from "react-router-dom";

export default function Transformsection() {
  return (
    <>
      <div className="transform-section-main">
        <div className="container-xs">
          <div className="transform-section-title">
            <h1>
              Helping you{" "}
              <span>
                transform <Pinkunderline />
              </span>{" "}
              your business
            </h1>
            <p>
              Bold ideas. Smarter strategies. Game-changing results. Let’s
              elevate your brand and unlock its full potential.
            </p>
          </div>
          <div className="transform-section-cards-main">
            <div className="transform-section-card">
              <h2 className="pink">Design</h2>
              <p>
                We create stunning, user-friendly websites that engage visitors,
                build trust, and turn interest into action.
              </p>
              <div className="transform-section-card-details">
                <NavLink to={"/"}>
                  <span>Discovery</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Web Design</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>User Experience Design</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Accessible Design</span>
                </NavLink>
              </div>
            </div>
            <div className="transform-section-card">
              <h2 className="green">Build</h2>
              <p>
                We develop high-performing, scalable solutions that work
                seamlessly for your goals and your customers.
              </p>
              <div className="transform-section-card-details">
                <NavLink to={"/"}>
                  <span>Website Development</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Craft CMS</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Spektrix Integration</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Shopify Development</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Technical SEO</span>
                </NavLink>
              </div>
            </div>
            <div className="transform-section-card">
              <h2 className="blue">Grow</h2>
              <p>
                We help you attract, engage, and convert customers with
                data-driven marketing that delivers results.
              </p>
              <div className="transform-section-card-details">
                <NavLink to={"/"}>
                  <span>Paid Advertising (PPC)</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Search Engine Optimisation</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Digital Marketing</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Content Strategy</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Social Media</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
