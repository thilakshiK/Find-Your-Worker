import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Media
} from "reactstrap";
import "../../../assets/styles/font.css";
import SkillComponent from "../Skill/skill";
import AddWorkerSkill from "../Skill/addWorkerSkill";
import axios from "axios";
import Select from "react-select";

let baselocations = [];

class WorkerEditProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phonenumber: "",
      status: "",
      baselocation: "",
      baselocationdis: "",
      rating: "",
      email: "",
      userId: "",
      imgURL: "",
      workerDetails: [],
      skillDetails: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleStatusSelect = this.handleStatusSelect.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.handleLocationSelect = this.handleLocationSelect.bind(this);
  }

  loadWorkerSkillComponent() {
    if (this.state.skillDetails.length !== 0) {
      return this.state.skillDetails.map(function(object, i) {
        return <SkillComponent obj={object} key={i} />;
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handlePhoneNumberChange(event) {
    this.setState({ phonenumber: event.target.value });
  }

  handleStatusSelect(status) {
    this.setState({ status });
    const userID = localStorage.getItem("UserId");
    const Status = { status: status.value };

    axios
      .put("http://localhost:3000/worker/status/" + userID, Status, {
        withCredentials: true
      })
      .then(res => {
        console.log("status response", res);
      });
  }

  handleLocationSelect(baselocation) {
    this.setState({ baselocation });
  }

  handleEditProfile() {
    let disableEditWorkerDetails = document.getElementById(
      "disableEditWorkerDetails"
    );
    disableEditWorkerDetails.style.display = "none";
    let enableEditWorkerDetails = document.getElementById(
      "enableEditWorkerDetails"
    );
    enableEditWorkerDetails.style.display = "block";
  }

  handleCancelUpdateProfile() {
    let enableEditWorkerDetails = document.getElementById(
      "enableEditWorkerDetails"
    );
    enableEditWorkerDetails.style.display = "none";
    let disableEditWorkerDetails = document.getElementById(
      "disableEditWorkerDetails"
    );
    disableEditWorkerDetails.style.display = "block";
  }

  handleUpdateProfile(event) {
    event.preventDefault();

    const userID = localStorage.getItem("UserId");
    const workerDetails = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      baseL: this.state.baselocation.label,
      contactno: this.state.phonenumber
    };

    axios
      .put("http://localhost:3000/worker/profile/" + userID, workerDetails, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        document.location.reload();
      });
    let enableEditWorkerDetails = document.getElementById(
      "enableEditWorkerDetails"
    );
    enableEditWorkerDetails.style.display = "none";
    let disableEditWorkerDetails = document.getElementById(
      "disableEditWorkerDetails"
    );
    disableEditWorkerDetails.style.display = "block";
  }

  componentWillMount() {
    const userId = localStorage.getItem("UserId");
    this.setState({
      userId: userId
    });
  }

  componentDidMount() {
    // get worker details
    axios
      .get("http://localhost:3000/worker/profile/" + this.state.userId, {
        withCredentials: true
      })
      .then(res => {
        console.log("here", res.data.result.recordsets[1]);

        if (res.data.result.recordsets[1].length != 0) {
          this.setState({
            skillDetails: res.data.result.recordsets[1]
          });
        } else {
          this.setState({
            skillDetails: []
          });
        }

        this.setState({
          firstname: res.data.result.recordsets[0][0].FirstName,
          lastname: res.data.result.recordsets[0][0].LastName,
          phonenumber: res.data.result.recordsets[0][0].ContactNumber,
          baselocationdis: res.data.result.recordsets[0][0].BaseLocation,
          email: res.data.result.recordsets[0][0].UserEmail,
          imgURL: res.data.result.recordsets[0][0].ImgUrl
        });
      })
      .catch(function(error) {
        // console.log(error);
      });

    //location selection

    axios
      .get("http://localhost:3000/dataservices/getalllocations", {
        withCredentials: true
      })
      .then(res => {
        let i = 0;
        let tempArray = {};

        for (i; i < res.data.recordsets[0].length; i++) {
          tempArray["value"] = i;
          tempArray["label"] = res.data.recordsets[0][i].DivisionalSecretary;
          baselocations.push(tempArray);
          tempArray = {};
        }
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  render() {
    const options = [
      { value: 0, label: "Offline" },
      { value: 1, label: "Online" }
    ];

    return (
      <Row style={{ marginTop: 50, fontFamily: "Josefin Sans", fontSize: 20 }}>
        <Col
          xs={{ size: 12 }}
          sm={{ size: 2, offset: 1 }}
          style={{ backgroundColor: "#ecf4f3" }}
        >
          <Media>
            <Media
              style={{
                width: 200,
                height: "auto",
                marginTop: 30,
                marginLeft: 20
              }}
              object
              src="data:image/png;base64,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"
              alt="Generic placeholder image"
            />
          </Media>

          <Button color="success" style={{ marginLeft: 40, marginTop: 20 }}>
            Upload New Photo
          </Button>

          <FormGroup row style={{ marginTop: 20, marginLeft: 10 }}>
            <Label for="rating" xs={12} sm={5}>
              Rating
            </Label>
            <Col xs={10} sm={6}>
              <Input type="number" value={this.state.raing} disabled />
            </Col>
          </FormGroup>

          <FormGroup row style={{ marginTop: 20 }}>
            <Label for="email" xs={12} sm={4}>
              Email
            </Label>
            <Col xs={10} sm={8}>
              <Input type="email" value={this.state.email} disabled />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="statusSelect" xs={12} sm={5}>
              Status
            </Label>

            <Col xs={10} sm={6}>
              <Select
                options={options}
                placeholder="Status"
                value={this.state.status}
                onChange={this.handleStatusSelect}
              ></Select>
            </Col>
          </FormGroup>
        </Col>

        <Col
          xs={{ size: 12 }}
          sm={{ size: 4, offset: 1 }}
          style={{ backgroundColor: "#f5f5f5" }}
        >
          {/*   disabled edit worker details form         */}

          <Form
            style={{ marginTop: 40, marginLeft: 50 }}
            id="disableEditWorkerDetails"
          >
            <FormGroup row>
              <Label for="firstName" xs={12} sm={5}>
                First Name
              </Label>
              <Col xs={10} sm={6}>
                <Input type="text" value={this.state.firstname} disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" xs={12} sm={5}>
                Last Name
              </Label>
              <Col xs={10} sm={6}>
                <Input type="text" value={this.state.lastname} disabled />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="contactnumber" xs={12} sm={5}>
                Phone Number
              </Label>
              <Col xs={10} sm={6}>
                <Input type="text" value={this.state.phonenumber} disabled />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="locationSelect" xs={12} sm={5}>
                Base Location
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  value={this.state.baselocationdis}
                  disabled
                ></Input>
              </Col>
            </FormGroup>

            <FormGroup check row style={{ marginTop: 20 }}>
              <Button color="success" onClick={this.handleEditProfile}>
                Edit Profile
              </Button>
            </FormGroup>
          </Form>

          {/* Enable edit worker details form */}

          <Form
            id="enableEditWorkerDetails"
            style={{ marginTop: 40, marginLeft: 50, display: "none" }}
            onSubmit={this.handleSubmit}
          >
            <FormGroup row>
              <Label for="firstName" xs={12} sm={5}>
                First Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleFirstNameChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" xs={12} sm={5}>
                Last Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handleLastNameChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="contactnumber" xs={12} sm={5}>
                Phone Number
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  value={this.state.phonenumber}
                  onChange={this.handlePhoneNumberChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="locationSelect" xs={12} sm={5}>
                Base Location
              </Label>
              <Col xs={10} sm={6}>
                <Select
                  value={this.state.baselocation}
                  onChange={this.handleLocationSelect}
                  options={baselocations}
                />
              </Col>
            </FormGroup>

            <FormGroup row style={{ marginTop: 20 }}>
              <Col xs={{ size: 5 }} sm={5}>
                <Button
                  color="success"
                  onClick={this.handleUpdateProfile}
                  style={{ width: 140 }}
                >
                  Update Profile
                </Button>
              </Col>

              <Col xs={{ size: 6, offset: 1 }} sm={{ size: 5, offset: 1 }}>
                <Button
                  color="warning"
                  onClick={this.handleCancelUpdateProfile}
                  style={{ width: 130 }}
                >
                  Cancel
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>

        <Col
          xs={{ size: 12 }}
          sm={{ size: 3 }}
          style={{
            backgroundColor: "#f5f5f5",
            overflowY: "scroll",
            height: 500
          }}
        >
          <AddWorkerSkill />

          {this.loadWorkerSkillComponent()}
        </Col>
      </Row>
    );
  }
}

export default WorkerEditProfileComponent;
