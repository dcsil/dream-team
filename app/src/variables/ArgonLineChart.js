import React from "react";

import { chartOptions, parseOptions } from "../assets/charts.js";

import { Line } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Row
} from "reactstrap";

import classnames from "classnames";

const Chart = require("chart.js");

class ArgonLineChart extends React.Component {

  constructor(props) {
    super(props);
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  state = {
    activeNav: 1,
    dataSelection: "data1"
  };

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      dataSelection: this.state.dataSelection === "data1" ? "data2" : "data1"
    });
  };

  componentDidMount() {
    parseOptions(Chart, chartOptions());
  }

  render() {
    return (
      <Card className="bg-gradient-default shadow">
        <CardHeader className="bg-transparent">
          <Row className="align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
              <h2 className="text-white mb-0">Sales value</h2>
            </div>
            <div className="col">
              <Nav className="justify-content-end" pills>
                <NavItem>
                  <NavLink
                    className={classnames("py-2 px-3", {
                      active: this.state.activeNav === 1
                    })}
                    href="#pablo"
                    onClick={e => this.toggleNavs(e, 1)}
                  >
                    <span className="d-none d-md-block">Month</span>
                    <span className="d-md-none">M</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames("py-2 px-3", {
                      active: this.state.activeNav === 2
                    })}
                    data-toggle="tab"
                    href="#pablo"
                    onClick={e => this.toggleNavs(e, 2)}
                  >
                    <span className="d-none d-md-block">Week</span>
                    <span className="d-md-none">W</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Row>
        </CardHeader>
        <CardBody>
          {/* Chart */}
          <div className="chart">
            <Line
              data={this.props.data[this.state.dataSelection]}
              options={this.props.options}
              getDatasetAtEvent={e => console.log(e)}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}
export default ArgonLineChart;
