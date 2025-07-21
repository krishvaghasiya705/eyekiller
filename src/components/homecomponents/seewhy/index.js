import React from "react";
import "./seewhy.scss";
import Hearticon from "../../../assets/icon/hearticon";
import Staricon from "../../../assets/icon/staricon";
import grandoperahouselogo from "../../../assets/image/grandoperahouselogo.png";
import orpheusnyclogo from "../../../assets/image/orpheusnyclogo.png";
import mahlatinireviewicon from "../../../assets/image/mahlatinireviewicon.png";
import artscouncillogo from "../../../assets/image/artscouncillogo.png";
import w5logo from "../../../assets/image/w5logo.png";
import gotstudiotourlogo from "../../../assets/image/gotstudiotourlogo.png";
import Commonbutton from "../../commonbutton";

export default function Seewhy() {
  return (
    <>
      <div className="see-why-main">
        <div className="container-xs">
          <div className="see-why-title">
            <h6>
              See why our clients{" "}
              <span>
                <Hearticon />
              </span>{" "}
              us
            </h6>
            <p>
              We believe in getting the details right, keeping our promises, and
              always going the extra mile. It’s how we work and why our clients
              trust us.
            </p>
          </div>
          <div className="see-why-cards-main">
            <div className="see-why-cards-grd-main">
              <div className="see-why-cards-grd-col">
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        “The Eyekiller team were fantastic to work with. Their
                        passion and skill shines through in each interaction and
                        their dedication to our project ensured that the final
                        product went beyond expectation. We are delighted with
                        our new website and the feedback from our customers has
                        been brilliant!”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img
                        src={grandoperahouselogo}
                        alt="grandoperahouselogo"
                      />
                      <div>
                        <span>Jen Rae</span>
                        <p>Grand Opera House</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        Eyekiller has been an absolute delight to work with both
                        on our new website and our paid advertising. Their team
                        was incredibly responsive and caring as we crafted and
                        executed plans to build our dream website. It looks and
                        behaves exactly as we want it to. We consider Eyekiller
                        a true partner with our paid advertising, as they help
                        us spread the word digitally and build audiences for our
                        concerts around the world.”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img src={orpheusnyclogo} alt="orpheusnyclogo" />
                      <div>
                        <span>Mattie Kaiser</span>
                        <p>Orpheus Chamber Orchestra</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-why-cards-grd-col">
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        “Eyekiller deliver visionary design, technical
                        competence, SEO expertise and excellent project
                        management to create best of breed websites. A dedicated
                        team of professionals that we would wholeheartedly
                        recommend.”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img
                        src={mahlatinireviewicon}
                        alt="mahlatinireviewicon"
                      />
                      <div>
                        <span>Liane Goldring</span>
                        <p>Mahlatini</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        “Our experience of working with Eyekiller during the
                        build of our new website was excellent; we felt we were
                        in safe hands with their highly experienced and
                        professional team of developers and designers. They took
                        the time to fully understand what we do, and our users’
                        needs. They worked with us to an agreed implementation
                        plan offering some flexibility and importantly they
                        ensured that all key stages of development remained on
                        track, so that the project was delivered on time and
                        within budget. We are delighted with our new website,
                        which has surpassed our expectations, and is receiving
                        really positive feedback from our stakeholders.”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img src={artscouncillogo} alt="artscouncillogo" />
                      <div>
                        <span>Matthew Hendry</span>
                        <p>The Arts Council</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-why-cards-grd-col">
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        “Eyekiller are an absolute pleasure to work with. They
                        are undoubtedly experts in their field and we are
                        delighted with our new customer-focused website that
                        puts our customers at the centre of our online offering.
                        I am very excited to continue to work with Eyekiller as
                        W5's digital development partner.”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img src={w5logo} alt="w5logo" />
                      <div>
                        <span>Ann Graham</span>
                        <p>W5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="see-why-card">
                  <div className="see-why-card-rating">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    <Staricon />
                  </div>
                  <div className="see-why-card-content">
                    <div className="see-why-card-content-para">
                      <p>
                        “We worked with Eyekiller to create two new websites:
                        one for showcasing our visitor experience and venue, and
                        another for our a brand new E-commerce shop. Eyekiller's
                        team was fantastic—professional, organised, responsive
                        and creative. The team immersed themselves in our
                        product to truly understand how we needed both of our
                        site's to promote our offerings and the finished
                        website's are truly amazing. We continue to work with
                        the Eyekiller team as the aftercare and support packages
                        are perfect for ensuring we evolve and update our sites
                        continuously. Myself and my team at Game of Thrones
                        Studio Tour would recommend Eyekiller for all of your
                        digital needs! A 5* experience and product delivered by
                        a top class team of experts.”
                      </p>
                    </div>
                    <div className="see-why-card-details">
                      <img src={gotstudiotourlogo} alt="gotstudiotourlogo" />
                      <div>
                        <span>Sherryl Murphy</span>
                        <p>Game of Thrones Studio Tour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="read-customrer-button">
            <Commonbutton CommonbuttonLinkpath={"/"} CommonbuttonText="Read Customer Reviews" Commonbuttonclass="common-button-tr-green-outline common-button-big-sc" />
          </div>
        </div>
      </div>
    </>
  );
}
