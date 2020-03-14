import React from "react";
import "./VenueTable.css";

class VenueTable extends React.Component {
    
    log = console.log;

    fs = require('fs');

    data = require("../../data/sampleData.json");
    
    render() {
        return (
            <div>
                <table>
            
                    <tr>
                        <th>Location</th>
                        <th>Leads</th>
                        <th>Estimated Value</th>
                    </tr>
            
                    <tr>
                        <td>Location</td>
                        <td>Leads</td>
                        <td>Estimated Value</td>
                    </tr>
            
                </table>
            </div>
        );
    }
}
export default VenueTable;
