import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

class WorkerProfileComponent extends Component {
  state = {};
  render() {
    return (
      <Container style={{ backgroundColor: "#f5f5f5" , marginTop : 30}} >
       
          <Form style = {{margin : 20}} >
            <FormGroup row>
              <Label for="firstName" sm={2}>
                First Name
              </Label>
              <Col sm={10}>
                <Input
                  type="firstname"
                  name="firstname"
                  id="examplefirstname"
                  placeholder="first name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={2}>
                Last Name
              </Label>
              <Col sm={10}>
                <Input
                  type="lastname"
                  name="lastname"
                  id="examplelastname"
                  placeholder="LastName"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Base Location
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </Col>
            </FormGroup>
           
            
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button color="success">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        
      </Container>
    );
  }
}

export default WorkerProfileComponent;
