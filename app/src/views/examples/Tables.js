import React from "react";

// reactstrap components
import {Container, Row} from "reactstrap";
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

  tables = [{
    dark: false, 
    footer: true, 
    columns: this.columns,
    rows: this.rows
  },{
    dark: true, 
    footer: false, 
    columns: this.columns,
    rows: this.rows
  }]

  render() {
    return (
      <>
       {/* Stats Header */}
      <Header />

        {/* Light and Dark Tables */}
        <Container className="mt--7" fluid>
          {this.tables.map((table) => {
            return(
              <Row>
              <div className="col">
                <DashboardTable 
                dark={table.dark}
                footer={table.footer}
                columns={table.columns}
                rows={table.rows} />
              </div>
              </Row>
            )
          })}
          </Container>
      </>
    );
  }
}

export default Tables;
