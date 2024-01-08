import React from "react";
import onepercent from "../assets/1-percent-of-profits-6504a3e1bc086.webp";
import "../style/Footer.css";
import downarrow from "../assets/down-arrow.svg";
function Footer() {
  const scrollToTop = () => {
    // For modern browsers
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });

    // For older browsers that do not support smooth scrolling
    // window.scrollTo(0, 0);
  };

  return (
    <>
      <footer>
        <div className="row">
          <div className="footer__images">
            <ul className="footer__links">
              <li>
                <a
                  className="link__hover-effect footer__link "
                  href="openinghours.html"
                >
                  OPENING HOURS
                </a>
              </li>
              <li>
                <a className="link__hover-effect footer__link" href="">
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="safety.html"
                >
                  WAIVER
                </a>
              </li>
              <li>
                <a className="link__hover-effect footer__link" href="">
                  JOIN THE TEAM
                </a>
              </li>
            </ul>
            <h3 className="gym__links">Bouldering Gyms</h3>
            <ul className="footer__links">
              <li>
                <a
                  className="link__hover-effect footer__link "
                  href="alexandria.html"
                >
                  Alexandria
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="paramatta.html"
                >
                  Paramatta
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="lanecove.html"
                >
                  Lane Cove
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="waterloo.html"
                >
                  Waterloo
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="enoggera.html"
                >
                  Enoggera
                </a>
              </li>
              <li>
                <a
                  className="link__hover-effect footer__link"
                  href="morningside.html"
                >
                  Morningside
                </a>
              </li>
            </ul>
            <ul>
              <img
                className="footer__image"
                src={onepercent}
                alt=""
                loading="lazy"
              />
            </ul>
            <p className="footer__text">
              Copyright &copy; 9 Degrees 2024 <br />
              <br />
              All rights reserved
            </p>
            <p className="footer__text"></p>
            <button onClick={scrollToTop} id="up-btn" className="go-up">
              <span className="up-text">Up</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
