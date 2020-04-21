import React from "react";

// reactstrap components
import {Button, Card, CardHeader, CardBody, Container, FormGroup, Form, Input, Row, Col} from "reactstrap";
// core components
import { getFirebaseDatabase } from "components/Firestore/Firestore.js";

class Profile extends React.Component {

  state = {
    venueName: "Venue Name",
    titleText: "Venue information loading ... ... ... ... ... ... ... ... ... ... ... ",
    acquired: false, 
    address: "loading", 
    estimatedValue: 0,
    phone: "loading"
  }

  componentDidMount = () => { 
    console.log(window.location.pathname +  window.location.search);
    let venueKey = new URLSearchParams(this.props.location.search).get("venueKey")
    console.log(venueKey)
    if (venueKey !== null){
      let db = getFirebaseDatabase();

      db.ref(`${venueKey}`).once("value").then( (snapshot) => {
        console.log(snapshot.val());
        let venue = snapshot.val();
        let titleText = "Here you can to view the details of a venue identified as a potential lead for music licensing";

        this.setState({venueName: venue.name, titleText: titleText, acquired: venue.acquired, address: venue.address, estimatedValue: venue.estimatedValue})
        this.setState({phone: venue.phone})
      });
    }
		//venueKey === null ? this.props.store.permalinkPostID = 0 : this.props.store.permalinkPostID = postID
  }
  

  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">{this.state.venueName}</h1>
                <p className="text-white mt-0 mb-5">
                  {this.state.titleText}
                </p>
                <Button
                  color="info"
                  href={"tel:+" + this.state.phone}
                  onClick={e => e.preventDefault()}
                >
                  Contact Venue
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt--7" fluid>
          <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
    <Card className="card-profile shadow">
      <Row className="justify-content-center">
        <Col className="order-lg-2" lg="3">
          <div className="card-profile-image">
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="..."
                className="rounded-circle"
                src={require("assets/img/theme/team-4-800x800.jpg")}
              />
            </a>
          </div>
        </Col>
      </Row>
      <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div className="d-flex justify-content-between">
          <Button
            className="mr-4"
            color="info"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="sm"
          >
            Add Venue to Interest
          </Button>
          <Button
            className="float-right"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="sm"
          >
            Add Venue to Success
          </Button>
        </div>
      </CardHeader>
      <CardBody className="pt-0 pt-md-4">
        <Row>
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
            </div>
          </div>
        </Row>
        <div className="text-center">
          <h3>
            {this.state.venueName}
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            Toronto, Ontario
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            Amazing Local Gym
          </div>
          <hr className="my-4" />
          <p>
            Yelp reviews show evidence of infringment: users indicate that the venue plays music, even though they are not licensed
          </p>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Show more
          </a>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col className="order-xl-1" xl="8">
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Venue Information</h3>
          </Col>
          <Col className="text-right" xs="4">
            <Button
              color="default"
              href="#myaccount"
              onClick={e => e.preventDefault()}
              size="sm"
            >
              Edit
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {/* <ProfileInformation/> */}
        <Form>
        <h6 className="heading-small text-muted mb-4">Contact Information</h6>
        <div className="pl-lg-4">
          <Row>
          <FormGroup>
          <label className="form-control-label">
           Phone Number: {this.state.phone}
          </label>
          </FormGroup>
          </Row>
        </div>
        <h6 className="heading-small text-muted mb-4">Lead Potential</h6>
        <div className="pl-lg-4">
          <Row>
          <FormGroup>
          <label className="form-control-label">
           Estimated Value: ${this.state.estimatedValue}
          </label>
          </FormGroup>
          </Row>
        </div>
        <h6 className="heading-small text-muted mb-4">About</h6>
        <div className="pl-lg-4">
          <Row>
          <FormGroup>
          <label className="form-control-label">
           Address: {this.state.address}
          </label>
          </FormGroup>
          </Row>
        </div>
      </Form>
      </CardBody>
    </Card>
  </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
