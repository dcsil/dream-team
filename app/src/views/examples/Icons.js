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
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Icons extends React.Component {
  state = {icons: [
    "active-40",
    "air-baloon",
    "album-2",
    "align-center",
    "atom",
    "badge",
    "basket",
    "book-bookmark",
    "button-play",
    "controller",
    "credit-card",
    "headphones",
    "map-big",
    "planet",
    "send",
    "scissors",
    "spaceship",
    "tablet-button",
    "tag",
    "tie-bow",
    "trophy",
    "vector",
    "image",
    "shop"

  ]};

  mappingFunction(icon) {
    return (
      <Col lg="3" md="6">
      <CopyToClipboard
        text={icon}
        onCopy={() =>
          this.setState({ copiedText: {icon} })
        }
      >
        <button
          className="btn-icon-clipboard"
          id={icon}
          type="button"
        >
          <div>
            <i className={"ni ni-" + icon} />
            <span>{icon}</span>
          </div>
        </button>
      </CopyToClipboard>
      <UncontrolledTooltip
        delay={0}
        trigger="hover focus"
        target={icon}
      >
        {this.state.copiedText === {icon}
          ? "Copied"
          : "Copy To Clipboard"}
      </UncontrolledTooltip>
    </Col>
    )
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Icons - See Nucleo-Icons.SVG in Assets for More</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    {this.state.icons.map((icon) => this.mappingFunction(icon))}
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
