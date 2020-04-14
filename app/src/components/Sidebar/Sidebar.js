import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Collapse,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  docData = [
    {
      link:
        "https://github.com/dcsil/dream-team/blob/master/Getting-Started.md",
      name: "Getting started",
      icon: "ni ni-spaceship"
    },
    {
      link: "https://github.com/dcsil/dream-team/blob/master/app/README.md",
      name: "Front End",
      icon: "ni ni-palette"
    },
    {
      link:
        "https://github.com/dcsil/dream-team/blob/firebase_functions/ingest/README.md",
      name: "Back End",
      icon: "ni ni-ui-04"
    }
  ];

  docMap = doc => {
    return (
      <NavItem>
        <NavLink href={doc.link}>
          <i className={doc.icon} />
          {doc.name}
        </NavLink>
      </NavItem>
    );
  };

  collapseHeader = (
    <div className="navbar-collapse-header d-md-none">
      <Row>
        {this.props.logo ? (
          <Col className="collapse-brand" xs="6">
            {this.props.logo.innerLink ? (
              <Link to={this.props.logo.innerLink}>
                <img
                  alt={this.props.logo.imgAlt}
                  src={this.props.logo.imgSrc}
                />
              </Link>
            ) : (
              <a href={this.props.logo.outterLink}>
                <img
                  alt={this.props.logo.imgAlt}
                  src={this.props.logo.imgSrc}
                />
              </a>
            )}
          </Col>
        ) : null}
        <Col className="collapse-close" xs="6">
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span />
            <span />
          </button>
        </Col>
      </Row>
    </div>
  );

  collapseSearch = (
    <Form className="mt-4 mb-3 d-md-none">
      <InputGroup className="input-group-rounded input-group-merge">
        <Input
          aria-label="Search"
          className="form-control-rounded form-control-prepended"
          placeholder="Search"
          type="search"
        />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <span className="fa fa-search" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );

  logoImage = () => {
    let navbarBrandProps;
    if (this.props.logo && this.props.logo.innerLink) {
      navbarBrandProps = {
        to: this.props.logo.innerLink,
        tag: Link
      };
    } else if (this.props.logo && this.props.logo.outterLink) {
      navbarBrandProps = {
        href: this.props.logo.outterLink,
        target: "_blank"
      };
    }

    return (
      <NavbarBrand className="pt-0" {...navbarBrandProps}>
        <img
          alt={this.props.logo.imgAlt}
          className="navbar-brand-img"
          src={this.props.logo.imgSrc}
        />
      </NavbarBrand>
    );
  };

  render() {
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {this.props.logo ? this.logoImage() : null}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {this.collapseHeader}
            {this.collapseSearch}
            <Nav navbar>{this.createLinks(this.props.routes)}</Nav>
            <hr className="my-3" />
            <h6 className="navbar-heading text-muted">Documentation</h6>
            <Nav className="mb-md-3" navbar>
              {this.docData.map(doc => this.docMap(doc))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;