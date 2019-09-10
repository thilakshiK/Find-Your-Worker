import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CompletedJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      startTime: "",
      endTime: "",
      orderDate: "",
      expectedEndTime: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount() {
    this.setState({
      startTime: new Date(this.props.obj.StartTime).toUTCString().split(" ")[4],
      endTime: new Date(this.props.obj.EndTime).toUTCString().split(" ")[4],
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
  render() {
    return (
      <div style={{ fontFamily: "Josefin Sans" }}>
        <Button
          color="success"
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
          <ModalHeader toggle={this.toggle}>Completed Order</ModalHeader>
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
                <Label for="finalPrice">Final Price</Label>
                <Input
                  type="number"
                  value={this.props.obj.FinalPrice}
                  id="finalPrice"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="starttime">Start Time</Label>
                <Input
                  type="time"
                  value={this.state.startTime}
                  id="starttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">End Time</Label>
                <Input
                  type="time"
                  value={this.state.endTime}
                  id="endtime"
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
                <Label for="rate">Rate</Label>
                <Input
                  type="number"
                  value={this.props.obj.Rate}
                  id="rate"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                  type="number"
                  value={this.props.obj.Rate}
                  id="rating"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="feedback">Review</Label>
                <Input
                  type="textarea"
                  value={this.props.obj.Review}
                  id="feedback"
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

export default CompletedJobComponent;
