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

class UpcomingJobComponent extends React.Component {
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
        <Button color="warning" onClick={this.toggle} style = {{width : 300, margin : 20}}>
          {this.props.jobid}
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
          <Label for="clientName">Client Name</Label>
          <Input type="name" name="name" id="clientName" disabled />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="location" name="location" id="location"  disabled />
        </FormGroup>

        
        <FormGroup>
          <Label for="date">Date</Label>
          <Input type="todayDate" name="todayDate" id="date" disabled  />  
          {/* date must be added automatically */}
        </FormGroup>

        <FormGroup>
          <Label for="contactno">Contact Number</Label>
          <Input type="contactnumber" name="contactnumber" id="contactno" disabled />
        </FormGroup>

        <FormGroup>
          <Label for="skill">Job Type</Label>
          <Input type="skillType" name="skillType" id="skill" disabled />
        </FormGroup>

        
        <FormGroup>
          <Label for="hrate">Hourly Charge</Label>
          <Input type="hourcharge" name="hourcharge" id="hrate" disabled />
        </FormGroup>

        <FormGroup>
          <Label for="endtime">Expected End Time</Label>
          <Input type="endTime" name="endTime" id="endtime" disabled />
        </FormGroup>
       
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
       
     
       
      </Form>
          </ModalBody>
          <ModalFooter>
          
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default  UpcomingJobComponent;
