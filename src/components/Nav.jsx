import React from "react";
import logo from "../assets/9degrees-logo-dark.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const toggleMenu = (event) => {
    // Toggle the state to change the class
    setSubMenuOpen((prevSubMenuOpen) => !prevSubMenuOpen);

    // Find the closest parent with the class "mobile--nav__link"
    const navLinkParent = event.target.closest(".mobile--nav__link");

    // If found, find the "mobile--nav__sub--links" element within that parent and toggle the "hidden" class
    if (navLinkParent) {
      const subLinksElement = navLinkParent.querySelector(
        ".mobile--nav__sub--links"
      );
      if (subLinksElement) {
        subLinksElement.classList.toggle("hidden");
      }
    }
  };

  const handleButtonClick = () => {
    // Toggle the state to change the class

    setIsChanged((prevIsChanged) => !prevIsChanged);
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const toggleNavBarOpacity = () => {
    // Toggle the menu state
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      {" "}
      <nav id="navBar">
        <div className="logo__wrapper">
          <figure>
            <Link to="/">
              <img src={logo} alt="" className="site__logo" loading="lazy" />
            </Link>
          </figure>
        </div>

        <ul className="nav__links">
          <li className="nav__link about-us">
            <Link
              href="ourteam.html"
              className="link__hover-effect nav__link--anchor"
            >
              About
            </Link>
            <div className="nav__sub--links">
              <a href="ourteam.html" className="sub__links">
                Team
              </a>
              <a href="safety.html" className="sub__links">
                Safety
              </a>
              <a href="under18.html" className="sub__links">
                Under 18s
              </a>
              <a href="routesetting.html" className="sub__links">
                Route Setting
              </a>
              <a href="cafe.html" className="sub__links">
                Cafe
              </a>
              <a href="dogs.html" className="sub__links">
                Dogs
              </a>
              <a href="fortheplanet.html" className="sub__links">
                For The Planet
              </a>
            </div>
          </li>
          <li className="nav__link">
            <a
              href="firstvisit.html"
              className="link__hover-effect nav__link--anchor"
            >
              First Visit
            </a>
          </li>
          <li className="nav__link pricing">
            <a
              href="memberships.html"
              className="link__hover-effect nav__link--anchor"
            >
              Pricing
            </a>
            <div className="nav__sub--links">
              <a href="memberships.html" className="sub__links">
                Day Passes & Memberships
              </a>
              <a href="newbieoffers.html" className="sub__links">
                Newbie Offers
              </a>
            </div>
          </li>
          <li className="nav__link">
            <a
              href="classes.html"
              className="link__hover-effect nav__link--anchor"
            >
              Classes
            </a>
          </li>
          <li className="locations nav__link">
            <a className="link__hover-effect nav__link--anchor">Locations</a>
            <div className="nav__sub--links">
              <a href="all.html" className="sub__links">
                View All
              </a>
              <a href="alexandria.html" className="sub__links">
                Alexandria
              </a>
              <a href="paramatta.html" className="sub__links">
                Paramatta
              </a>
              <a href="lanecove.html" className="sub__links">
                Lane Cove
              </a>
              <a href="waterloo.html" className="sub__links">
                Waterloo
              </a>
              <a href="enoggera.html" className="sub__links">
                Enoggera
              </a>
              <a href="morningside.html" className="sub__links">
                Morningside
              </a>
            </div>
          </li>
          <li className="nav__link">
            <a href="#about" className="link__hover-effect nav__link--anchor">
              Shop
            </a>
          </li>
        </ul>

        <ul
          className={`mobile--nav__links ${
            isMenuOpen ? "open-mobile-nav" : ""
          }`}
          id="mobile--navBar"
        >
          <li className="mobile--nav__link about-us">
            <a
              href="ourteam.html"
              className="link__hover-effect mobile--nav__link--anchor"
            >
              About
            </a>

            <div className="mobile--nav__sub--links hidden">
              <a href="ourteam.html" className="mobile--sub__links">
                Team
              </a>
              <a href="safety.html" className="mobile--sub__links">
                Safety
              </a>
              <a href="under18.html" className="mobile--sub__links">
                Under 18s
              </a>
              <a href="routesetting.html" className="mobile--sub__links">
                Route Setting
              </a>
              <a href="cafe.html" className="mobile--sub__links">
                Cafe
              </a>
              <a href="" className="mobile--sub__links">
                Dogs
              </a>
              <a href="" className="mobile--sub__links">
                For The Planet
              </a>
            </div>

            <div
              className="plus minus plus-about active"
              onClick={(event) => toggleMenu(event)}
            />
          </li>
          <li className="mobile--nav__link">
            <a
              href="firstvisit.html"
              className="link__hover-effect mobile--nav__link--anchor"
            >
              First Visit
            </a>
          </li>
          <li className="mobile--nav__link pricing">
            <a
              href="memberships.html"
              className="link__hover-effect mobile--nav__link--anchor"
            >
              Pricing
            </a>
            <div className="mobile--nav__sub--links hidden">
              <a href="memberships.html" className="mobile--sub__links">
                Day Passes & Memberships
              </a>
              <a href="newbieoffers.html" className="mobile--sub__links">
                Newbie Offers
              </a>
            </div>
            <div
              className="plus plus-pricing active"
              onClick={(event) => toggleMenu(event)}
            ></div>
          </li>
          <li className="mobile--nav__link">
            <a
              href="classes.html"
              className="link__hover-effect mobile--nav__link--anchor"
            >
              Classes
            </a>
          </li>
          <li className="mobile--nav__link locations">
            <a href="" className="link__hover-effect mobile--nav__link--anchor">
              Locations
            </a>

            <div className="mobile--nav__sub--links hidden">
              <a href="all.html" className="mobile--sub__links">
                View All
              </a>
              <a href="alexandria.html" className="mobile--sub__links">
                Alexandria
              </a>
              <a href="paramatta.html" className="mobile--sub__links">
                Paramatta
              </a>
              <a href="lanecove.html" className="mobile--sub__links">
                Lane Cove
              </a>
              <a href="waterloo.html" className="mobile--sub__links">
                Waterloo
              </a>
              <a href="enoggera.html" className="mobile--sub__links">
                Enoggera
              </a>
              <a href="morningside.html" className="mobile--sub__links">
                Morningside
              </a>
            </div>
            <div
              className="plus plus-locations active"
              onClick={(event) => toggleMenu(event)}
            ></div>
          </li>
          <li className="mobile--nav__link">
            <a
              href="#about"
              className="link__hover-effect mobile--nav__link--anchor"
            >
              Shop
            </a>
          </li>

          <div className="background"></div>
        </ul>

        <button
          className={`burger__menu--button ${isChanged ? "change" : ""}`}
          onClick={(toggleNavBarOpacity, handleButtonClick)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </nav>
    </>
  );
}

export default Nav;
