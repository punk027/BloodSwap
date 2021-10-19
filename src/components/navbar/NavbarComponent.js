import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ethereumLogo from "../../assets/ethereumLogo.png";
import "./NavbarComponent.css";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="t_swap" href="#pricing">
              Swap
            </Nav.Link>
          </Nav>
          <Nav style={{ margin: "0" }}>
            <Nav.Link className="route_item" href="#deets">
              <img className="eth_icon_navbar" src={ethereumLogo} alt="" />
              &nbsp; Ethereum
            </Nav.Link>
            <Nav.Link className="route_item" href="#deets">
              CONNECT TO WALLET
            </Nav.Link>

            <Nav.Link className="route_item" href="#memes">
              ...
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
