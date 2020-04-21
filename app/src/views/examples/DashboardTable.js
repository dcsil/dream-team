import React from "react";

// reactstrap components
import { Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media, Pagination, PaginationItem, PaginationLink, Progress, Table, UncontrolledTooltip } from "reactstrap";
import { uid } from "react-uid";

class DashboardTable extends React.Component {

  getStatusBadge(status) {
    if (status === "pending") {
      return "bg-warning"
    } else if (status === "completed") {
      return "bg-success"
    } else if (status === "delayed") {
      return "bg-danger"
    } else if (status === "on schedule") {
      return "bg-info"
    }
  }

  getProgressBar(progress) {
    if (parseInt(progress) < 80) {
      return "bg-danger"
    } else if (parseInt(progress) === 100) {
      return "bg-success"
    } else if (parseInt(progress) > 80) {
      return "bg-info"
    }
  }

  profileMappingFunction(profile) {
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

  dropdownMenu =
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
          href="tel:9799"
          onClick={e => e.preventDefault()}
        >
          Call Venue
              </DropdownItem>
        <DropdownItem
          onClick={e => e.preventDefault()}
        >
          Toggle Status
              </DropdownItem>
        <DropdownItem
          href="#pablo"
          disabled="true"
          onClick={e => e.preventDefault()}
        >
          Change Manager
              </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

  rowStatus(row) {
    return (
      <Badge color="" className="badge-dot mr-4">
        <i className={this.getStatusBadge(row.status)} />
        {row.status}
      </Badge>
    )
  }

  rowTitle(row) {
    return (
      <Media className="align-items-center">
        <a className="avatar rounded-circle mr-3" href="#pablo" onClick={e => e.preventDefault()}>
          <img alt="..." src={row.img} />
        </a>
        <Media><span className="mb-0 text-sm">{row.name}</span></Media>
      </Media>
    )
  }

  rowProfiles(row) {
    return (
      <div className="avatar-group">
        {row.profiles.map((profile) => this.profileMappingFunction(profile))}
      </div>
    )
  }

  rowProgress(row) {
    return (
      <div className="d-flex align-items-center">
        <span className="mr-2">{row.progress}%</span>
        <div>
          <Progress max="100" value={row.progress} barClassName={this.getProgressBar(row.progress)} />
        </div>
      </div>
    )
  }

  rowMappingFunction(row) {
    return (
      <tr key={uid(row.value)}>
        <th scope="row">
          {this.rowTitle(row)}
        </th>
        <td>
          {row.value}
        </td>
        <td>
          {this.rowStatus(row)}
        </td>
        <td>
          {this.rowProfiles(row)}
        </td>
        <td>
          {this.rowProgress(row)}
        </td>
        <td className="text-right">
          {this.dropdownMenu}
        </td>
      </tr>
    )
  }

  footer = <CardFooter className="py-4">
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

  render() {
    const dark = this.props.dark;
    const footer = this.props.footer;
    const columns = this.props.columns;
    const rows = this.props.rows;

    return (
      <Card className={dark ? "bg-default shadow" : "shadow"}>
        <CardHeader className={dark ? "bg-transparent border-0" : "border-0"}>
          <h3 className={dark ? "text-white mb-0" : "mb-0"}>Card tables</h3>
        </CardHeader>
        <Table className={dark ? "align-items-center table-dark table-flush" : "align-items-center table-flush"} responsive>
          <thead className={dark ? "thead-dark" : "thead-light"}>
            <tr>
              {columns.map((title) => { return (<th scope="col">{title}</th>) })}
              <th scope="col" />
            </tr>
          </thead>
          <tbody> {rows.map((row) => this.rowMappingFunction(row))} </tbody>
        </Table>
        {footer ? this.footer : <></>}
      </Card>
    )
  }
}

export default DashboardTable;