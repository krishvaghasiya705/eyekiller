import React from "react";
import "./transformsection.scss";
import Pinkunderline from "../../../assets/icon/pinkunderline";
import { NavLink } from "react-router-dom";

export default function Transformsection() {
  const transformCards = [
    {
      title: "Design",
      colorClass: "pink",
      desc: "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
      links: [
        { text: "Discovery", to: "/discovery" },
        { text: "Web Design", to: "/web-design" },
        { text: "User Experience Design", to: "/ux-design" },
        { text: "Accessible Design", to: "/accessible-design" },
      ],
    },
    {
      title: "Build",
      colorClass: "green",
      desc: "We develop high-performing, scalable solutions that work seamlessly for your goals and your customers.",
      links: [
        { text: "Website Development", to: "/website-development" },
        { text: "Craft CMS", to: "/craft-cms" },
        { text: "Spektrix Integration", to: "/spektrix-integration" },
        { text: "Shopify Development", to: "/shopify-development" },
        { text: "Technical SEO", to: "/technical-seo" },
      ],
    },
    {
      title: "Grow",
      colorClass: "blue",
      desc: "We help you attract, engage, and convert customers with data-driven marketing that delivers results.",
      links: [
        { text: "Paid Advertising (PPC)", to: "/ppc" },
        { text: "Search Engine Optimisation", to: "/seo" },
        { text: "Digital Marketing", to: "/digital-marketing" },
        { text: "Content Strategy", to: "/content-strategy" },
        { text: "Social Media", to: "/social-media" },
      ],
    },
  ];

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
            {transformCards.map((card, idx) => (
              <div className="transform-section-card" key={idx}>
                <h2 className={card.colorClass}>{card.title}</h2>
                <p>{card.desc}</p>
                <div className="transform-section-card-details">
                  {card.links.map((link, i) => (
                    <NavLink to={link.to} key={i}>
                      <span>{link.text}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
