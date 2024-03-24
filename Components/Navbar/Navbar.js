"use client";
import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="bar">
          <div className="port">PORTFOLIO...</div>
          <div className="item">
            <Link
              className="goto"
              activeClass="active"
              to={"intro"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="goto"
              activeClass="active"
              to={"contacts"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="goto"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to={"profiles"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="goto"
            >
              Profiles
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
