import React, { Component } from "react";
import ClientNavComponent from "../../Navbar/clientnav";
import "../../../assets/styles/font.css";
import MapContainer from "../../Location/map";
import PendingRequest from "./pendingRequest";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class BookingComponent extends Component {
  state = {};

  h5 = {
    fontFamily: "Josefin Sans",
    textAlign: "center",
    marginTop: 20
  };

  handleBookNow = () => {
    let booklater = document.getElementById("booklaterform");
    booklater.style.display = "none";
    let booknow = document.getElementById("mapcontainer");
    booknow.style.display = "block";
  };

  handleBookLater = () => {
    let booknow = document.getElementById("mapcontainer");
    booknow.style.display = "none";
    let booklater = document.getElementById("booklaterform");
    booklater.style.display = "block";
  };

  handleSendRequest = () => {};

  handleCancelRequest = () => {};

  render() {
    return (
      <div>
        <ClientNavComponent />

        <Container style={{ marginTop: 30, fontFamily: "Josefin Sans" }}>
          <Row>
            <Col sm="7" style={{ backgroundColor: "#d1eecc" }}>
              <h5 style={this.h5}>New Request</h5>
              <Form style={{ marginTop: 40, marginLeft: 50 }} id="form1">
                <FormGroup row>
                  <Label for="jobTypeSelect" xs={12} sm={5}>
                    Job Type
                  </Label>
                  <Col xs={10} sm={6}>
                    <Input type="select" name="select" id="jobTypeSelect">
                      <option>Mechanic</option>
                      <option>Plumber</option>
                      {/* select base locations from db */}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">Job Description</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <FormGroup check row style={{ marginTop: 20 }}>
                  <Button
                    color="info"
                    onClick={this.handleBookNow}
                    style={{ width: 200 }}
                  >
                    Book Now
                  </Button>

                  <Button
                    color="success"
                    onClick={this.handleBookLater}
                    style={{ marginLeft: 50, width: 200 }}
                  >
                    Book Later
                  </Button>
                </FormGroup>
              </Form>
            </Col>

            <Col
              sm={{ size: 4, offset: 1 }}
              style={{ backgroundColor: "#ffffc5" }}
            > <h5 style={this.h5}>Pending Requests</h5>
            <PendingRequest reqId = "2345"/>

            </Col>
          </Row>

          <Row style={{ marginTop: 10 }}>
            <Col sm="7">
              <div id="mapcontainer" style={{ display: "none" }}>
                <FormGroup row style={{ width: "800px", height: "500px" }}>
                 
                  <MapContainer style={{ width: "50%", height: "50%" }} />
                </FormGroup>

                <FormGroup row>
                  <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                    <Button color="success" onClick={this.handleSendRequest}>
                      Send Request
                    </Button>
                  </Col>
                  <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                    <Button color="info" onClick={this.handleCancelRequest}>
                      Cancel
                    </Button>
                  </Col>
                </FormGroup>
              </div>

              <div id="booklaterform" style={{ display: "none" }}>
                <Form style={{ backgroundColor: "#d1eecc", marginTop: 30 }}>
                  <FormGroup row>
                    <Label for="date" xs={12} sm={{ size: 5, offset: 1 }}>
                      Date
                    </Label>
                    <Col xs={10} sm={6}>
                      <Input type="date" required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="time" xs={12} sm={{ size: 5, offset: 1 }}>
                      Time
                    </Label>
                    <Col xs={10} sm={6}>
                      <Input type="time" required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                      <Button color="success" onClick={this.handleSendRequest}>
                        Send Request
                      </Button>
                    </Col>
                    <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                      <Button color="info" onClick={this.handleCancelRequest}>
                        Cancel
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookingComponent;
