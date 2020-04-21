import React from "react";

import {
  Card,
  Table,
  Col
} from "reactstrap";
import TableCardHeader from "./TableCardHeader";

import { getFirebaseDatabase } from "../../components/Firestore/Firestore.js";

class PageVisitsTable extends React.Component {
  state = {
    managedPeople: [
      {
        name: "Joel Marquee",
        revenue_gen: "$4,569",
        reach: "112",
        delta: "16.53%",
        status: "fas fa-arrow-down text-warning mr-3"
      }
    ]
  }

  componentDidMount() {
    let db = getFirebaseDatabase();
    let me = this;
    db.ref("/ManagedPeeople").on("value", function (snapshot) {

      let new_data = [];
      snapshot.forEach(doc => {
        new_data.push(doc.val());
      });
      me.setState({ managedPeople: new_data });
    });
  }

  formatRow(person) {
    return (
      <tr>
        <th scope="row">{person.name}</th>
        <td>{person.revenue_gen}</td>
        <td>{person.reach}</td>
        <td>
          <i className={person.status} /> {person.delta}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Col className="mb-5 mb-xl-0" xl="8">
        <Card className="shadow">
          <TableCardHeader name="Managed People" />
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Revenue Generated</th>
                <th scope="col">Venues Reached</th>
                <th scope="col">Performance Metric</th>
              </tr>
            </thead>
            <tbody>
              {this.state.managedPeople.map(person =>
                this.formatRow(person)
              )}
            </tbody>
          </Table>
        </Card>
      </Col>
    );
  }
}
export default PageVisitsTable;
