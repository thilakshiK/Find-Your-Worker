import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

class PendingRequestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      clientId: "",
      clientFirstName: "",
      clientLastName: "",
      cleintPhoneNumber: "",
      startTime: "",
      expectedEndTime: "",
      orderDate: "",
      requestId: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleAcceptRequest = this.handleAcceptRequest.bind(this);
  }

  componentWillMount() {
    if (this.props.obj.ClientId != null) {
      this.setState({
        clientId: this.props.obj.ClientId,
        requestId: this.props.obj.RequestId
      });
    }

    this.setState({
      startTime: new Date(this.props.obj.StartTime).toUTCString().split(" ")[4],
      expectedEndTime: new Date(this.props.obj.ExpectedEndTime)
        .toUTCString()
        .split(" ")[4],
      orderDate: new Date(this.props.obj.OrderDate)
        .toUTCString()
        .split(" ")
        .slice(1, 4)
        .join(" ")
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/client/profile/" + this.state.clientId, {
        withCredentials: true
      })
      .then(res => {
        this.setState({
          clientFirstName: res.data.result.recordsets[0][0].FirstName,
          clientLastName: res.data.result.recordsets[0][0].LastName,
          cleintPhoneNumber: res.data.result.recordsets[0][0].ContactNumber
        });
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleAcceptRequest(event) {
    event.preventDefault();

    //Accept request

    let sendObj = {
      WorkerId: localStorage.getItem("UserId")
    };

    axios
      .post(
        "http://localhost:3000/requests/accept/" + this.state.requestId,
        sendObj,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.toggle();
        window.location.reload();
      });
  }

  render() {
    return (
      <div style={{ fontFamily: "Josefin Sans" }}>
        <Button
          color="danger"
          onClick={this.toggle}
          style={{ width: 300, marginLeft: 120, marginTop: 20 }}
        >
          {this.props.obj.RequestId}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Pending Request</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              <FormGroup>
                <Label for="clientName">Client Name</Label>
                <Input
                  type="text"
                  value={
                    this.state.clientFirstName + " " + this.state.clientLastName
                  }
                  id="clientName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="starttime"> Start Time</Label>
                <Input
                  type="time"
                  value={this.state.startTime}
                  id="starttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="location">Order Location</Label>
                <Input
                  type="text"
                  value={this.props.obj.OrderLocation}
                  id="location"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">Expected End Time</Label>
                <Input
                  type="time"
                  value={this.state.expectedEndTime}
                  id="endtime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="orderdate">Order Date</Label>
                <Input
                  type="text"
                  value={this.state.orderDate}
                  id="orderdate"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="contactno">Contact Number</Label>
                <Input
                  type="number"
                  value={this.state.cleintPhoneNumber}
                  id="contactno"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="skill">Job Type</Label>
                <Input
                  type="text"
                  value={this.props.obj.SkillId}
                  id="skill"
                  disabled
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleAcceptRequest}>
              Accept
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PendingRequestComponent;
