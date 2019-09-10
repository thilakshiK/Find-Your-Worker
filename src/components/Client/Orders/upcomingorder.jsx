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
import "../../../assets/styles/font.css";

class UpcomingJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      orderDate: "",
      expectedEndTime: "",
      expectedStartTime: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount(){
      this.setState({
        expectedEndTime: new Date(this.props.obj.ExpectedEndTime)
        .toUTCString()
        .split(" ")[4],
        expectedStartTime: new Date(this.props.obj.ExpectedStartTime)
        .toUTCString()
        .split(" ")[4],
        orderDate: new Date(this.props.obj.OrderDate)
        .toUTCString()
        .split(" ")
        .slice(1, 4)
        .join(" ")
      })
  }
  render() {
    return (
      <div style={{ fontFamily: "Josefin Sans" }}>
        <Button
          color="info"
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
          <ModalHeader toggle={this.toggle}>Upcoming Order</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              <FormGroup>
                <Label for="workerFirstName">Worker First Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.FirstName}
                  id="workerFirstName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="workerLastName">Worker Last Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.LastName}
                  id="workerLastName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="location">Order Location</Label>
                <Input
                  type="text"
                  value={this.props.obj.BaseLocation}
                  id="location"
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
                <Label for="expectedPrice">Expected Price</Label>
                <Input
                  type="number"
                  value={this.props.obj.ExpectedPrice}
                  id="expectedPrice"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="expectedstarttime">Expected Start Time</Label>
                <Input
                  type="time"
                  value={this.state.expectedStartTime}
                  id="expectedstarttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">Expected End Time</Label>
                <Input
                  type="time"
                  value={this.state.expectedStartTime}
                  id="endtime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="rate">Rate</Label>
                <Input
                  type="number"
                  value={this.props.obj.Rate}
                  id="rate"
                  disabled
                />
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default UpcomingJobComponent;
