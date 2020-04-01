import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar className="navbar" light expand="md">
        <NavbarBrand
          href="/"
          style={{ color: "AliceBlue", fontWeight: "bold" }}
        >
          Quarantine Productivity
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{backgroundColor:'white', opacity:'0.9'}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{display:"flex", justifyContent:"flex-end", width:"900%"}}>
            <NavItem>
              <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
                Login
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/register" style={{ color: "#fff" }}>
                Register
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
