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

class PendingRequest extends Component {
  state = {};

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
          style={{ width: 300, marginLeft: 30, marginTop: 20 }}
        >
          {this.props.reqId}
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
                <Label for="skill">Job Type</Label>
                <Input type="skillType" name="skillType" id="skill" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="text" id="exampleText" disabled />
              </FormGroup>

              <FormGroup>
                <Label for="endtime">Expected End Time</Label>
                <Input type="endTime" name="endTime" id="endtime" disabled />
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
            </Form>
          </ModalBody>
          <ModalFooter>
           
            <Button color="secondary" onClick={this.toggle}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PendingRequest;
