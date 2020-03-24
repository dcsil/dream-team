import React from "react";
import { shallow } from 'enzyme';
import DashboardTable from "./DashboardTable";

let columns = ["Project", "Budget", "Status", "Users", "Completion"]

let profiles = [
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

let rows = [{
    name: "Argon Design System",
    img: require("assets/img/theme/bootstrap.jpg"),
    value: "$2,500 USD",
    status: "pending",
    profiles: profiles,
    progress: "60"
},
{
    name: "Angular Now UI Kit PRO",
    img: require("assets/img/theme/angular.jpg"),
    value: "$1,800 USD",
    status: "completed",
    profiles: profiles,
    progress: "100"
},
{
    name: "Black Dashboard",
    img: require("assets/img/theme/sketch.jpg"),
    value: "$3,150 USD",
    status: "delayed",
    profiles: profiles,
    progress: "72"
},
{
    name: "React Material Dashboard",
    img: require("assets/img/theme/react.jpg"),
    value: "$4,400 USD",
    status: "on schedule",
    profiles: profiles,
    progress: "90"
},
{
    name: "Vue Paper UI Kit PRO",
    img: require("assets/img/theme/vue.jpg"),
    value: "$2,200 USD",
    status: "completed",
    profiles: profiles,
    progress: "100"
}]

let tables = [{
  dark: false, 
  footer: true, 
  columns: columns,
  rows: rows
},{
  dark: true, 
  footer: false, 
  columns: columns,
  rows: rows
}]

describe('MyComponent', () => {
    it('light render correctly', () => {
        const light = shallow(<DashboardTable 
            dark={tables[0].dark}
            footer={tables[0].footer}
            columns={tables[0].columns}
            rows={tables[0].rows} />);
    });

    it('light render correctly', () => {
        const dark = shallow(<DashboardTable 
            dark={tables[1].dark}
            footer={tables[1].footer}
            columns={tables[1].columns}
            rows={tables[1].rows} />);
    });
});
