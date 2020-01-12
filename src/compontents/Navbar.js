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
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../assets/img/logo_v1.PNG";
import ca from "../assets/img/lang/ca.png";
import es from "../assets/img/lang/es.png";
import en from "../assets/img/lang/en.png";

const Navbar = props => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <LangContext.Consumer>
      {([lang, changeLangAux]) => (
        <NavBar fixed="top" expand="md" className="navbar-wrapper">
          <NavbarBrand href="/">
            <img alt="" src={logo} className="logo-navbar"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggleMenu} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/#home">{lang.navbar.home}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#about">{lang.navbar.about}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#services">{lang.navbar.services}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">{lang.navbar.contact}</NavLink>
              </NavItem>
            </Nav>
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
