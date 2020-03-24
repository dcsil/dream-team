import React from "react";

import {
  Button,
  CardHeader,
  Row,
} from "reactstrap";


class TableCardHeader extends React.Component {

    render(){
            return(
            <CardHeader className="border-0">
            <Row className="align-items-center">
                <div className="col">
                <h3 className="mb-0">{this.props.name}</h3>
                </div>
                <div className="col text-right">
                <Button
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                >
                    See all
                </Button>
                </div>
            </Row>
            </CardHeader>
        )
    }

} export default TableCardHeader