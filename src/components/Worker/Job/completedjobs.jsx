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
          {this.props.jobid}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Completed Job</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              <FormGroup>
                <Label for="clientName">Client Name</Label>
                <Input type="name" name="name" id="clientName" disabled />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input type="location" name="location" id="location" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="todayDate" name="todayDate" id="date" disabled />
                {/* date must be added automatically */}
              </FormGroup>

              <FormGroup>
                <Label for="contactno">Contact Number</Label>
                <Input
                  type="contactnumber"
                  name="contactnumber"
                  id="contactno"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="skill">Job Type</Label>
                <Input type="skillType" name="skillType" id="skill" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="hrate">Hourly Charge</Label>
                <Input
                  type="hourcharge"
                  name="hourcharge"
                  id="hrate"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">End Time</Label>
                <Input type="endTime" name="endTime" id="endtime" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="finalprice">Final Price</Label>
                <Input type="price" name="price" id="finalprice" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input type="rate" name="rate" id="rating" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="feedback">Feedback</Label>
                <Input
                  type="textarea"
                  name="feedbacktext"
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
