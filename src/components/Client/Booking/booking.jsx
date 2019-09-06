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
import Select from "react-select";
import axios from "axios";
let skillList = [];

class BookingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      skillId: "",
      description: "",
      startTime: "",
      endTime: "",
      date: "",
      result: [],
      availableWorkers: []
    };

    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleBookNow = this.handleBookNow.bind(this);
    this.handleBookLater = this.handleBookLater.bind(this);
    this.handleSendRequest = this.handleSendRequest.bind(this);
    this.handleCancelRequest = this.handleCancelRequest.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  h5 = {
    fontFamily: "Josefin Sans",
    textAlign: "center",
    marginTop: 20
  };

  componentDidMount() {
    // worker skill selection

    axios
      .get("http://localhost:3000/dataservices/getallskills", {
        withCredentials: true
      })
      .then(res => {
        let temArray = {};

        for (let i = 0; i < res.data.recordsets[0].length; i++) {
          temArray["value"] = res.data.recordsets[0][i].SkillId;
          temArray["label"] = res.data.recordsets[0][i].SkillTitle;
          skillList.push(temArray);
          temArray = {};
        }
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  handleSkillChange(skill) {
    this.setState({
      skill: skill,
      skillId: skill.value
    });
  }

  handleChangeStartTime(event) {
    this.setState({ startTime: event.target.value });
  }

  handleChangeEndTime(event) {
    this.setState({ endTime: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  handleBookNow() {
    let booklater = document.getElementById("booklaterform");
    booklater.style.display = "none";
    let booknow = document.getElementById("mapcontainer");
    booknow.style.display = "block";
  }

  handleBookLater() {
    let booknow = document.getElementById("mapcontainer");
    booknow.style.display = "none";
    let booklater = document.getElementById("booklaterform");
    booklater.style.display = "block";
  }

  handleSendRequest() {
    let searchWorkerRequest = {
      skillId: this.state.skillId,
      orderDate: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      coordinate: null,
      clientId: localStorage.getItem("UserId")
    };

    axios
      .post("http://localhost:3000/bookLater/search", searchWorkerRequest, {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data);
        if (response.data.message == "No workers available") {
          alert("No Workers Available");
        } else if (response.data.message == "OK") {
          if (response.data.result.Workers.length > 0) {
            //console.log(response.data.result)
            this.setState({ result: response.data.result });
            this.setState({ availableWorkers: response.data.result.Workers });
          }
        }
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .post("http://localhost:3000/bookLater/sendRequest", this.state.result)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCancelRequest() {}

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
                    <Select
                      value={this.state.skill}
                      onChange={this.handleSkillChange}
                      options={skillList}
                      placeholder="Skills"
                    />
                    {/* <Input type="select" name="select" id="jobTypeSelect">
                      <option>Mechanic</option>
                      <option>Plumber</option>
                     
                    </Input> */}
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">Job Description</Label>
                  <Input
                    type="textarea"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="description"
                  />
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
            >
              {" "}
              <h5 style={this.h5}>Pending Requests</h5>
              <PendingRequest reqId="2345" />
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
                      <Input
                        type="date"
                        value={this.state.date}
                        onChange={this.handleChangeDate}
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="starttime" xs={12} sm={{ size: 5, offset: 1 }}>
                      Start Time
                    </Label>
                    <Col xs={10} sm={6}>
                      <Input
                        type="time"
                        id="starttime "
                        value={this.state.startTime}
                        onChange={this.handleChangeStartTime}
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="endtime" xs={12} sm={{ size: 5, offset: 1 }}>
                      End Time
                    </Label>
                    <Col xs={10} sm={6}>
                      <Input
                        type="time"
                        id="endtime"
                        value={this.state.endTime}
                        onChange={this.handleChangeEndTime}
                        required
                      />
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
