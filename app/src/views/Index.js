import React from "react";

import { chartExample1, chartExample2 } from "variables/chartExamples.js";

import { Container, Row, Col } from "reactstrap";

import SocialTrafficTable from "./examples/SocialTrafficTable";
import PageVisitsTable from "./examples/PageVisitsTable";
import Header from "components/Headers/Header.js";
import ArgonLineChart from "variables/ArgonLineChart";
import ArgonBarChart from "variables/ArgonBarChart";

import { getFirebaseDatabase } from "../components/Firestore/Firestore.js";

class Index extends React.Component {
  state = {
    chart_line: chartExample1,
    chart_graph: chartExample2,
    chart_graph_data: chartExample2.data
  }

  componentDidMount() {
    let db = getFirebaseDatabase();
    let me = this;
    db.ref("Profits/Year").on("value", function (snapshot) {
      console.log(snapshot.val());
      let temp = {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
            data: snapshot.val(),
            maxBarThickness: 10
          }
        ]
      };
      me.setState({ chart_graph_data: temp });
      chartExample1.data1(null, snapshot.val());
      me.setState({ chart_line: chartExample1 });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            {/* this.salesValue() */}
            {/* Sales Value */}
            <Col className="mb-5 mb-xl-0" xl="8">
              <ArgonLineChart
                data={this.state.chart_line}
                options={this.state.chart_line.options}
              />
            </Col>
            {/* Total orders*/}
            <Col xl="4">
              <ArgonBarChart
                data={this.state.chart_graph_data}
                options={this.state.chart_graph.options}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <PageVisitsTable />
            <SocialTrafficTable />
          </Row>
        </Container>
      </>
    );
  }

} export default Index;
