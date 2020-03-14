import React from "react";
import "./VenueTable.css";
import data from "../../data/sampleData.json"

class VenueTable extends React.Component {
    "use strict"

    fs = require('fs');

    loadData() {
        let table = document.getElementById("venues")
        for(let i = 0; i < data.length; i++){
            let add = true
            for (let j = 0; j < table.rows.length; j++){
                let x = table.rows[j].cells[0].innerHTML
                if (x === data[i].location){
                    add = false
                    let newLeads = parseInt(table.rows[j].cells[1].innerHTML, 10) + 1 
                    let newEstimate = parseInt(table.rows[j].cells[2].innerHTML, 10) + data[i].estimatedValue
                    
                    table.rows[j].cells[1].innerHTML = newLeads.toString()
                    table.rows[j].cells[2].innerHTML = newEstimate.toString()
                    break
                }
            }
            if(add){
                let row = document.createElement("tr")
                
                let location = document.createElement("td")
                location.appendChild(document.createTextNode(data[i].location))
                
                let leads = document.createElement("td")
                leads.appendChild(document.createTextNode("1"))
                
                let estimate = document.createElement("td")
                estimate.appendChild(document.createTextNode(data[i].estimatedValue))
                
                row.appendChild(location)
                row.appendChild(leads)
                row.appendChild(estimate)
                
                table.appendChild(row)
            }
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Location</th>
                        <th>Leads</th>
                        <th>Estimated Value</th>
                    </tr>
                    </thead>
            
                    <tbody id="venues">
                    </tbody>
                </table>
            </div>
        );
    }
}
export default VenueTable;
