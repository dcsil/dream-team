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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "Common.css";

import { getFirebaseDatabase } from "../Database/firebase.js";

class Header extends React.Component {

  state = {
    stats: [{
      name: "New Leads",
      value: "12,350",
      change: "0.348",
      since: "last month",
      icon: "fas fa-binoculars", //fa-eye 
      color: "gradient-bomb"  // can use bg-gradient red for a little more snazzy //bg-danger
    }, {
      name: "Tariffs Sold",
      value: "$1,255",
      change: "-0.185",
      since: "last week",
      icon: "fas fa-dollar-sign", //fa-file-invoice-dollar
      color: "gradient-bomb"
    }, {
      name: "Venues Contacted",
      value: "123",
      change: "0.154",
      since: "yesterday",
      icon: "fas fa-paper-plane",
      color: "gradient-bomb"
    }, {
      name: "Infringment Evidence",
      value: "49.65%",
      change: "0.12",
      since: "last month",
      icon: "fas fa-fingerprint",
      color: "gradient-bomb"
    }
    ]
  }

  componentDidMount() {
    let db = getFirebaseDatabase();
    let me = this;
    db.ref("headers").on("value", function (snapshot) {
      let new_data = [];
      snapshot.forEach(doc => {
        new_data.push(doc.val());
      });
      me.setState({ stats: new_data });
    });
  }

  getChange = (stat) => {
    let float = parseFloat(stat.change)
    if (float < 0) {
      return (
        <span className="text-warning mr-2">
          <i className="fas fa-arrow-down" /> {-float * 100}%
        </span>
      )
    } else {
      return (
        <span className="text-success mr-2">
          <i className="fa fa-arrow-up" /> {float * 100}%
        </span>
      )
    }
  }

  statsMap = (stat) => {
    return (
      <Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-0"
                >
                  {stat.name}
                </CardTitle>
                <span className="h2 font-weight-bold mb-0">
                  {stat.value}
                </span>
              </div>
              <Col className="col-auto">
                <div className={"icon icon-shape " + stat.color + " text-white rounded-circle shadow"}>
                  <i className={stat.icon} />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              {this.getChange(stat)}
              {" "}
              <span className="text-nowrap">Since {stat.since}</span>
            </p>
          </CardBody>
        </Card>
      </Col>
    )
  }

  render() {
    return (
      <>
        {/*<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">*/}
        <div className="header gradient-bomb pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                {this.state.stats.map((stat) => this.statsMap(stat))}
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
