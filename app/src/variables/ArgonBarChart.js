import React from "react";

import {
    chartOptions,
    parseOptions,
  } from "../assets/charts.js";

import { Bar } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
} from "reactstrap";

const Chart = require("chart.js");

class ArgonLineChart extends React.Component {

    componentDidMount(){
        parseOptions(Chart, chartOptions());
    }

    render(){
        return(
          <Card className="shadow">
          <CardHeader className="bg-transparent">
            <Row className="align-items-center">
              <div className="col">
                <h6 className="text-uppercase text-muted ls-1 mb-1">
                  Performance
                </h6>
                <h2 className="mb-0">Total orders</h2>
              </div>
            </Row>
          </CardHeader>
          <CardBody>
            {/* Chart */}
            <div className="chart">
              <Bar data={this.props.data} options={this.props.options} />
            </div>
          </CardBody>
        </Card>
        )
    }
} export default ArgonLineChart