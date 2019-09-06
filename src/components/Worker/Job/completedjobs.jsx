import React from "react";
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
import "../../../assets/styles/font.css";

class CompletedJobComponent extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Completed Job</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              {/* <FormGroup>
                <Label for="createdDate">Created Date</Label>
                <Input
                  type="date"
                  value={this.props.obj.CreatedDate.data}
                  id="createdDate"
                  disabled
                />
              </FormGroup> */}

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
                {/* skill title */}
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
                <Label for="starttime">Start Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.StartTime}
                  id="starttime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">End Time</Label>
                <Input
                  type="time"
                  value={this.props.obj.EndTime}
                  id="endtime"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="duration">Duration</Label>
                <Input
                  type="number"
                  value={this.props.obj.Duration}
                  id="duration"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="finalprice">Final Price</Label>
                <Input
                  type="number"
                  value={this.props.obj.FinalPrice}
                  id="finalprice"
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
                <Label for="feedback">Feedback</Label>
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
