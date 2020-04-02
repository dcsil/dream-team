import React from "react";

import { chartExample1, chartExample2 } from "variables/chartExamples.js";

import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/Header.js";
import ArgonLineChart from "variables/ArgonLineChart";
import ArgonBarChart from "variables/ArgonBarChart";

class Index extends React.Component {

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
                data={chartExample1}
                options={chartExample1.options}
              />
            </Col> 
            {/* Total orders*/}
            <Col xl="4">
              <ArgonBarChart
                data={chartExample2.data}
                options={chartExample2.options}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }

} export default Index;
