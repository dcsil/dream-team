import React from "react";

// reactstrap components
import {Button, Card, CardHeader, CardBody, Container, Row, Col} from "reactstrap";
// core components
import ProfileInformation from "./ProfileInformation.js";
import { getFirebaseDatabase } from "components/Firestore/Firestore.js";

class Profile extends React.Component {

  state = {
    venueName: "Venue Name",
    titleText: "Venue information loading... here you will be able to view the details of a venue identified as a potential lead for music licensing"
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
        this.setState({venueName: venue.name})
      });
    }
		//venueKey === null ? this.props.store.permalinkPostID = 0 : this.props.store.permalinkPostID = postID
  }

  myAccount = 
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
        <ProfileInformation/>
      </CardBody>
    </Card>
  </Col>

  profileCard = 
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
            Connect
          </Button>
          <Button
            className="float-right"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="sm"
          >
            Message
          </Button>
        </div>
      </CardHeader>
      <CardBody className="pt-0 pt-md-4">
        <Row>
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
              <div>
                <span className="heading">22</span>
                <span className="description">Friends</span>
              </div>
              <div>
                <span className="heading">10</span>
                <span className="description">Photos</span>
              </div>
              <div>
                <span className="heading">89</span>
                <span className="description">Comments</span>
              </div>
            </div>
          </div>
        </Row>
        <div className="text-center">
          <h3>
            {this.state.venueName}
            <span className="font-weight-light">, 27</span>
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            Bucharest, Romania
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            Solution Manager - Creative Tim Officer
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            University of Computer Science
          </div>
          <hr className="my-4" />
          <p>
            Ryan — the name taken by Melbourne-raised, Brooklyn-based
            Nick Murphy — writes, performs and records all of his own
            music.
          </p>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Show more
          </a>
        </div>
      </CardBody>
    </Card>
  </Col>

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
                  href="#pablo"
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
            {this.profileCard}
            {this.myAccount}
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
