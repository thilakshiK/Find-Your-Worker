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

class OngoingJobComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
          <ModalHeader toggle={this.toggle}>Ongoing Job</ModalHeader>
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
                <Label for="starttime"> Start Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.StartTime}
                  id="starttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="expectedstarttime">Expected Start Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.ExpectedStartTime}
                  id="expectedstarttime"
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
          {/* <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              Start
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default OngoingJobComponent;
