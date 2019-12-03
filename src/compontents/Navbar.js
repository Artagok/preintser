import React, { useState } from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar as NavBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../assets/img/logo_v1.PNG";

const Navbar = props => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBar fixed="top" expand="md" className="navbar-wrapper">
      <NavbarBrand href="/">
        <img src={logo} className="logo-navbar"></img>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Inici</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">L'empresa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Serveis</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Contacte</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Els nostres treballs</NavLink>
          </NavItem>
        </Nav>
        <NavLink href="/components/">Components</NavLink>
      </Collapse>
    </NavBar>
  );
};

export default Navbar;
