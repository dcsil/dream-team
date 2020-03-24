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
import {Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media, Pagination, PaginationItem, PaginationLink, Progress, Table, Container, Row, UncontrolledTooltip} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import DashboardTable from "./DashboardTable";

class Tables extends React.Component {

  columns = ["Project", "Budget", "Status", "Users", "Completion"]

  profiles = [
    {
      image: require("assets/img/theme/team-1-800x800.jpg"),
      name: "Ryan Tompson",
      id: "tooltip742438047"
    },
    {
      image: require("assets/img/theme/team-2-800x800.jpg"),
      name: "Romina Hadid",
      id: "tooltip941738690"
    },
    {
      image: require("assets/img/theme/team-3-800x800.jpg"),
      name: "Alexander Smith",
      id: "tooltip804044742"
    },
    {
      image: require("assets/img/theme/team-4-800x800.jpg"),
      name: "Jessica Doe",
      id: "tooltip996637554"
    }
  ]

  rows = [{
      name: "Argon Design System",
      img: require("assets/img/theme/bootstrap.jpg"),
      value: "$2,500 USD",
      status: "pending",
      profiles: this.profiles,
      progress: "60"
  },
  {
      name: "Angular Now UI Kit PRO",
      img: require("assets/img/theme/angular.jpg"),
      value: "$1,800 USD",
      status: "completed",
      profiles: this.profiles,
      progress: "100"
  },
  {
      name: "Black Dashboard",
      img: require("assets/img/theme/sketch.jpg"),
      value: "$3,150 USD",
      status: "delayed",
      profiles: this.profiles,
      progress: "72"
  },
  {
      name: "React Material Dashboard",
      img: require("assets/img/theme/react.jpg"),
      value: "$4,400 USD",
      status: "on schedule",
      profiles: this.profiles,
      progress: "90"
  },
  {
      name: "Vue Paper UI Kit PRO",
      img: require("assets/img/theme/vue.jpg"),
      value: "$2,200 USD",
      status: "completed",
      profiles: this.profiles,
      progress: "100"
  }]

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Light Table with Footer */}
          <Row>
          <div className="col">
            <DashboardTable 
            dark={false} 
            footer={true}
            columns={this.columns}
            rows={this.rows} />
          </div>
          </Row>
          {/* Dark table with no Footer */}
          <Row className="mt-5">
          <div className="col">
            <DashboardTable 
              dark={true} 
              footer={false}
              columns={this.columns}
              rows={this.rows} />
          </div>
          </Row>
          </Container>
      </>
    );
  }
}

export default Tables;
