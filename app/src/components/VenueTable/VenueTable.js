import React from "react";
import "./VenueTable.css";
import data from "../../data/sampleData.json"

class VenueTable extends React.Component {

    fs = require('fs');

    x() {
        console.log(data);
    }

    componentDidMount() {
        this.x();
    }

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
