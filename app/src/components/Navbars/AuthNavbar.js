/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AuthNavbar extends React.Component {
  navBarData = [
    {
      icon: "ni ni-planet",
      to: "/admin",
      name: "Dashboard"
    },
    {
      icon: "ni ni-circle-08",
      to: "/auth/register",
      name: "Register"
    },
    {
      icon: "ni ni-key-25",
      to: "/auth/login",
      name: "Login"
    },
    {
      icon: "ni ni-single-02",
      to: "/admin/user-profile",
      name: "Profile"
    }
  ];

  navBarMap = nav => {
    return (
      <NavItem>
        <NavLink className="nav-link-icon" to={nav.to} tag={Link}>
          <i className={nav.icon} />
          <span className="nav-link-inner--text">{nav.name} </span>
        </NavLink>
      </NavItem>
    );
  };

  logo = (
    <NavbarBrand to="/admin" tag={Link}>
      <img alt="..." src={require("assets/img/brand/argon-react-white.png")} />
    </NavbarBrand>
  );

  collapsableMenu = (
    <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
      <div className="navbar-collapse-header d-md-none">
        <Row>
          <Col className="collapse-brand" xs="6">
            <Link to="/">
              <img
                alt="..."
                src={require("assets/img/brand/argon-react.png")}
              />
            </Link>
          </Col>
          <Col className="collapse-close" xs="6">
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span />
              <span />
            </button>
          </Col>
        </Row>
      </div>
      <Nav className="ml-auto" navbar>
        {this.navBarData.map(nav => this.navBarMap(nav))}
      </Nav>
    </UncontrolledCollapse>
  );

  render() {
    return (
      <>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            {this.logo}
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            {this.collapsableMenu}
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AuthNavbar;
