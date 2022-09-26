import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';

import logo from '../assets/logo.png';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>
        <Container className="head">
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </Container>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-list">
          <LinkContainer to="/">
            <Nav.Link>Rockets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/missions">
            <Nav.Link>Missions</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/my-profile">
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
