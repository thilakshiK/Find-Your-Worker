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
  Input,
  Alert
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
      startTime: "",
      endTime: "",
      date: "",
      visibleSuccess: false,
      user: [],
      availableWorkers: []
    };

    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleBookNow = this.handleBookNow.bind(this);
    this.handleBookLater = this.handleBookLater.bind(this);
    this.handleSendBookLaterRequest = this.handleSendBookLaterRequest.bind(
      this
    );
    this.handleCancelBookLater = this.handleCancelBookLater.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.onDismissSuccess = this.onDismissSuccess.bind(this);
    this.handleSendBookNowRequest = this.handleSendBookNowRequest.bind(this)
    this.handleCancelBookNow = this.handleCancelBookNow.bind(this)
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

  onDismissSuccess() {
    this.setState({ visibleSuccess: false });
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

  handleSendBookNowRequest(){
    

  }


  handleCancelBookNow(){
    let booknow = document.getElementById("mapcontainer");
    booknow.style.display = "none";

  }

  handleSendBookLaterRequest() {
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
        if (response.data.message == "No workers available") {
          alert("No Workers Available");
        } else if (response.data.message == "OK") {
          if (response.data.result.Workers.length > 0) {
            this.setState({ user: response.data.result.User });
            this.setState({ availableWorkers: response.data.result.Workers });
          }

          let sendReq = {
            User: this.state.user,
            Workers: this.state.availableWorkers
          };

          axios
            .post("http://localhost:3000/bookLater/sendRequest", sendReq)
            .then(response => {
              console.log("send request", response.data);
              this.setState({
                startTime: "",
                endTime: "",
                date: "",
                skill: "",
                visibleSuccess: true
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCancelBookLater() {
    let booklater = document.getElementById("booklaterform");
    booklater.style.display = "none";
    this.setState({
      startTime: "",
      endTime: "",
      date: "",
      skill: ""
    });
  }

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
                  </Col>
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
                    <Button color="success" onClick={this.handleSendBookNowRequest}>
                      Send Request
                    </Button>
                  </Col>
                  <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                    <Button color="info" onClick={this.handleCancelBookNow}>
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
                      <Button
                        color="success"
                        onClick={this.handleSendBookLaterRequest}
                      >
                        Send Request
                      </Button>
                    </Col>
                    <Col xs={{ size: 5 }} sm={{ size: 5, offset: 1 }}>
                      <Button color="info" onClick={this.handleCancelBookLater}>
                        Cancel
                      </Button>
                    </Col>
                  </FormGroup>

                  <Alert
                    color="success"
                    isOpen={this.state.visibleSuccess}
                    toggle={this.onDismissSuccess}
                  >
                    Request is send successfully !
                  </Alert>
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
