import React from "react";

import {
  Card,
  Table,
  Col
} from "reactstrap";
import TableCardHeader from "./TableCardHeader";

class PageVisitsTable extends React.Component {
  pageVisitsData = [
    {
      page: "/argon/",
      visitors: "4,569",
      uniqueUsers: "340",
      bounceRate: "46,53%",
      bounceStatus: "fas fa-arrow-up text-success mr-3"
    },
    {
      page: "/argon/index.html",
      visitors: "3,985",
      uniqueUsers: "319",
      bounceRate: "46,53%",
      bounceStatus: "fas fa-arrow-down text-warning mr-3"
    },
    {
      page: "/argon/charts.html",
      visitors: "3,513",
      uniqueUsers: "294",
      bounceRate: "36,49%",
      bounceStatus: "fas fa-arrow-down text-warning mr-3"
    },
    {
      page: "/argon/tables.html",
      visitors: "2,050",
      uniqueUsers: "147",
      bounceRate: "50,87%",
      bounceStatus: "fas fa-arrow-up text-success mr-3"
    },
    {
      page: "/argon/profile.html",
      visitors: "1,795",
      uniqueUsers: "190",
      bounceRate: "46,53%",
      bounceStatus: "fas fa-arrow-down text-danger mr-3"
    }
  ];

  pageVisitsRow(pageVisit) {
    return (
      <tr>
        <th scope="row">{pageVisit.page}</th>
        <td>{pageVisit.visitors}</td>
        <td>{pageVisit.uniqueUsers}</td>
        <td>
          <i className={pageVisit.bounceStatus} /> {pageVisit.bounceRate}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Col className="mb-5 mb-xl-0" xl="8">
        <Card className="shadow">
            <TableCardHeader name="Page visits"/>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Page name</th>
                <th scope="col">Visitors</th>
                <th scope="col">Unique users</th>
                <th scope="col">Bounce rate</th>
              </tr>
            </thead>
            <tbody>
              {this.pageVisitsData.map(pageVisit =>
                this.pageVisitsRow(pageVisit)
              )}
            </tbody>
          </Table>
        </Card>
      </Col>
    );
  }
}
export default PageVisitsTable;
