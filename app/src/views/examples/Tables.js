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
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Tables extends React.Component {

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

  state = {rows: [{
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
  }
  ]};

  getStatusBadge(status){
    if (status === "pending"){
      return "bg-warning"
    } else if (status === "completed"){
      return "bg-success"
    } else if (status === "delayed"){
      return "bg-danger"
    } else if (status === "on schedule"){
      return "bg-info"
    }
  }

  getProgressBar(progress){
    if(parseInt(progress) < 80){
        return "bg-danger"
    } else if (parseInt(progress) === 100){
        return "bg-success"
    } else if (parseInt(progress) > 80){
        return "bg-info"
    }
  }

  profileMappingFunction(profile){
    return (
      //if you surround with <span> it becomes more spread out
      //<span> 
      [
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id={profile.id}
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={profile.image}
          />
        </a>,
        <UncontrolledTooltip
          delay={0}
          target={profile.id}
        >
          {profile.name}
        </UncontrolledTooltip>
      ]
      //</span>
    )
  }

  mappingFunction(row) {
    return (
      <tr>
        <th scope="row">
          <Media className="align-items-center">
            <a
              className="avatar rounded-circle mr-3"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                src={row.img}
              />
            </a>
            <Media>
              <span className="mb-0 text-sm">
                {row.name}
              </span>
            </Media>
          </Media>
        </th>
        <td>{row.value}</td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className={this.getStatusBadge(row.status)} />
            {row.status}
          </Badge>
        </td>
        <td>
          <div className="avatar-group">
          {row.profiles.map((profile) => this.profileMappingFunction(profile))}
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{row.progress}%</span>
            <div>
              <Progress
                max="100"
                value={row.progress}
                barClassName={this.getProgressBar(row.progress)}
              />
            </div>
          </div>
        </td>
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={e => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Action
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Another action
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
    </tr>
    )
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Users</th>
                      <th scope="col">Completion</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((row) => this.mappingFunction(row))}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Users</th>
                      <th scope="col">Completion</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.rows.map((row) => this.mappingFunction(row))}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
          </Container>
      </>
    );
  }
}

export default Tables;
