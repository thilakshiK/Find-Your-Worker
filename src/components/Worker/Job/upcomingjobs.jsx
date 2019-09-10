import React from "react";
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
import "../../../assets/styles/font.css";
import axios from "axios";

class UpcomingJobComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      reason: "",
      orderid: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleCancelUpcomingJob = this.handleCancelUpcomingJob.bind(this);
    this.handleConfirmCancel = this.handleConfirmCancel.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleStartJob = this.handleStartJob.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount() {
    this.setState({
      orderid: this.props.obj.OrderId
    });
  }

  handleCancelUpcomingJob() {
    let cancelButton = document.getElementById("cancelButton");
    let startButton = document.getElementById("startButton");
    cancelButton.style.display = "none";
    startButton.style.display = "none";
    let confirmCancel = document.getElementById("confirmCancel");
    confirmCancel.style.display = "block";
  }

  handleReasonChange(event) {
    this.setState({ reason: event.target.value });
    console.log(this.state.reason);
  }

  handleConfirmCancel() {
    const cancelOrderDetails = {
      OrderId: this.state.orderid,
      Reason: this.state.reason
    };

    axios
      .put(
        "http://localhost:3000/ordersWorker/cancelOrder",
        cancelOrderDetails,
        {
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res);
        window.location.reload();
      });

    this.toggle();
  }

  handleStartJob() {
    const tempDate = new Date();
    const currentTime =
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes() +
      ":" +
      tempDate.getSeconds();

    if (localStorage.getItem("startedOrderId") != null) {
      alert("There is Another Ongoing Job");
    } else {
      if (localStorage.getItem("startedOrderId") == null) {
        localStorage.setItem("startedOrderId", this.props.obj.OrderId);
        //create the req.body to send
        let startJob = {
          OrderId: this.props.obj.OrderId,
          StartTime: currentTime
        };
        axios
          .put("http://localhost:3000/ordersWorker/startOrder", startJob, {
            withCredentials: true
          })
          .then(response => {
            console.log(response.data);
          });
        window.location.reload()
      }
    }
  }
  render() {
    return (
      <div style={{ fontFamily: "Josefin Sans" }}>
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ width: 300, margin: 20 }}
        >
          {this.props.obj.OrderId}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Upcoming Job</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              <FormGroup>
                <Label for="clientFirstName">Client First Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.FirstName}
                  id="clientFirstName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="clientLastName">Client Last Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.LastName}
                  id="clientLastName"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Order Location</Label>
                <Input
                  type="text"
                  value={this.props.obj.OrderLoaction}
                  id="location"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="orderdate">Order Date</Label>
                <Input
                  type="text"
                  value={this.props.obj.OrderDate}
                  id="orderdate"
                  disabled
                />
                {/* date must be added automatically */}
              </FormGroup>

              <FormGroup>
                <Label for="contactno">Contact Number</Label>
                <Input
                  type="number"
                  value={this.props.obj.ContactNumber}
                  id="contactno"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="skill">Job Type</Label>
                <Input
                  type="text"
                  value={this.props.obj.SkillTitle}
                  id="skill"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="hrate">Hourly Charge</Label>
                <Input
                  type="number"
                  value={this.props.obj.HourlyCharge}
                  id="hrate"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="starttime">Expected Start Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.ExpectedStartTime}
                  id="starttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">Expected End Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.ExpectedEndTime}
                  id="endtime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="expectedprice">Expected Price</Label>
                <Input
                  type="number"
                  value={this.props.obj.ExpectedPrice}
                  id="expectedprice"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="duration">Duration</Label>
                <Input
                  type="text"
                  value={this.props.obj.Duration}
                  id="duration"
                  disabled
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={this.handleStartJob}
              id="startButton"
            >
              start
            </Button>
            <Button
              color="secondary"
              onClick={this.handleCancelUpcomingJob}
              id="cancelButton"
            >
              Cancel
            </Button>

            <div id="confirmCancel" style={{ display: "none" }}>
              <FormGroup style={{ width: 300 }}>
                <Label for="reason">Reason</Label>
                <Input
                  type="textarea"
                  value={this.state.reason}
                  onChange={this.handleReasonChange}
                  id="reason"
                />
              </FormGroup>

              <Button color="danger" onClick={this.handleConfirmCancel}>
                Confirm Cancel
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpcomingJobComponent;
