import React from "react";

import {
  Button,
  Card,
  CardHeader,
  Progress,
  Table,
  Row,
  Col
} from "reactstrap";
import TableCardHeader from "./TableCardHeader";

class SocialTrafficTable extends React.Component {
  socialTrafficData = [
    {
      source: "Facebook",
      visitors: "1,480",
      percentage: "60",
      percentageStatus: "bg-gradient-danger"
    },
    {
      source: "TikTok",
      visitors: "5,480",
      percentage: "70",
      percentageStatus: "bg-gradient-success"
    },
    {
      source: "Google",
      visitors: "4,807",
      percentage: "80",
      percentageStatus: ""
    },
    {
      source: "Instagram",
      visitors: "3,678",
      percentage: "75",
      percentageStatus: "bg-gradient-info"
    },
    {
      source: "Twitter",
      visitors: "2,645",
      percentage: "30",
      percentageStatus: "bg-gradient-warning"
    }
  ];

  socialTrafficRow(socialTraffic) {
    return (
      <tr>
        <th scope="row">{socialTraffic.source}</th>
        <td>{socialTraffic.visitors}</td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{socialTraffic.percentage}%</span>
            <div>
              <Progress
                max="100"
                value={socialTraffic.percentage}
                barClassName={socialTraffic.percentageStatus}
              />
            </div>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Col xl="4">
        <Card className="shadow">
          <TableCardHeader name="Social traffic"/>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Referral</th>
                <th scope="col">Visitors</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.socialTrafficData.map(socialTraffic =>
                this.socialTrafficRow(socialTraffic)
              )}
            </tbody>
          </Table>
        </Card>
      </Col>
    );
  }
}
export default SocialTrafficTable;