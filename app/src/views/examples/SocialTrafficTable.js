import React from "react";

import {
  Card,
  Progress,
  Table,
  Col
} from "reactstrap";
import TableCardHeader from "./TableCardHeader";

import { getFirebaseDatabase } from "../../components/Database/firebase";

class SocialTrafficTable extends React.Component {
  state = {
    socials_rated: [
      {
        source: "Yelp",
        locations: "1,480",
        percentage: "60",
        percentageStatus: "bg-gradient-danger"
      }
    ]
  }

  componentDidMount() {
    let db = getFirebaseDatabase();
    let me = this;
    db.ref("convictions").on("value", function (snapshot) {
      let new_data = [];
      snapshot.forEach(doc => {
        new_data.push(doc.val());
      });
      me.setState({ socials_rated: new_data });
    });
  }

  socialConvictions(social) {
    return (
      <tr>
        <th scope="row">{social.source}</th>
        <td>{social.locations}</td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{social.percentage}%</span>
            <div>
              <Progress
                max="100"
                value={social.percentage}
                barClassName={social.percentageStatus}
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
          <TableCardHeader name="Social traffic" />
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Source</th>
                <th scope="col"># Leads</th>
                <th scope="col">Conviction Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.socials_rated.map(social =>
                this.socialConvictions(social)
              )}
            </tbody>
          </Table>
        </Card>
      </Col>
    );
  }
}
export default SocialTrafficTable;
