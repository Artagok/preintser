import React, { useState } from "react";
import { LangContext } from "../lang-context";
import "./Navbar.css";
import {
  Collapse,
  Navbar as NavBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import * as Scroll from "react-scroll";
import ca from "../assets/img/lang/ca.png";
import es from "../assets/img/lang/es.png";
import en from "../assets/img/lang/en.png";

const Navbar = props => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [scrollStyle, setScrollStyle] = useState([
    {width: "18rem"}, 
    {fontSize: "1.5rem"}
  ]);

  window.onscroll = () => {
    setScrollStyle(
      window.pageYOffset === 0
        ? [{width: "18rem"}, {fontSize: "1.5rem"}]
        : [{width: "8rem"}, {fontSize: "1.25rem"}]);
  };

  return (
    <LangContext.Consumer>
      {([lang, changeLangAux]) => (
        <NavBar fixed="top" expand="md" className="navbar-wrapper">
          <NavbarBrand href="/" style={scrollStyle[0]}>
            <img alt="" src={lang.navbar.logo} className="logo-navbar"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggleMenu} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/*=== Home ===*/}
              <NavItem>
                <Scroll.Link
                  to="home"
                  smooth={true}
                  className="navbar-link"
                  style={scrollStyle[1]}
                >
                  {lang.navbar.home}
                </Scroll.Link>
              </NavItem>
              {/*=== About ===*/}
              <NavItem>
                <Scroll.Link
                  to="about"
                  smooth={true}
                  className="navbar-link"
                  style={scrollStyle[1]}
                >
                  {lang.navbar.about}
                </Scroll.Link>
              </NavItem>
              {/*=== Services ===*/}
              <NavItem>
                <Scroll.Link
                  to="services"
                  smooth={true}
                  className="navbar-link"
                  style={scrollStyle[1]}
                >
                  {lang.navbar.services}
                </Scroll.Link>
              </NavItem>
              {/*=== Contact ===*/}
              <NavItem>
                <Scroll.Link
                  to="contact"
                  smooth={true}
                  className="navbar-link"
                  style={scrollStyle[1]}
                >
                  {lang.navbar.contact}
                </Scroll.Link>
              </NavItem>
            </Nav>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/preintser"
            >
              <i
                id="twitter-button"
                className="fa fa-twitter"
                aria-hidden="true"
              ></i>
            </a>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="lg">
              <DropdownToggle color="outline-dark" id="lang-button">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu right={false} className="dropdown-menu-md-right">
                <DropdownItem onClick={() => changeLangAux("ca")}>
                  <LanguageItem>
                    <img src={ca} alt="" />
                    <span>Català</span>
                  </LanguageItem>
                </DropdownItem>
                <DropdownItem onClick={() => changeLangAux("es")}>
                  <LanguageItem>
                    <img src={es} alt="" />
                    <span>Castellano</span>
                  </LanguageItem>
                </DropdownItem>
                <DropdownItem onClick={() => changeLangAux("en")}>
                  <LanguageItem>
                    <img src={en} alt="" />
                    <span>English</span>
                  </LanguageItem>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Collapse>
        </NavBar>
      )}
    </LangContext.Consumer>
  );
};

const LanguageItem = props => {
  return (
    <div
      className="language-item"
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      {props.children}
    </div>
  );
};

export default Navbar;
