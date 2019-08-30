import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap";



class AddWorkerSkill extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
         <Label sm={4} style = {{marginLeft : 80 , marginTop : 80}}>Skills</Label>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem", marginLeft : 90 }}
        >
          Add New
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form style={{ padding: 40 }}>
                <FormGroup row>
                  {/* <Label for="exampleSelect">Skill Type</Label> */}
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Mechanic</option>
                    <option>Driver</option>
                   
                  </Input>
                </FormGroup>
                <FormGroup row>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="description"
                  />
                </FormGroup>

                <FormGroup row>
                  <Input
                    type="text"
                    name="hrate"
                    id="hrate"
                    placeholder="hourly rate"
                  />
                </FormGroup>

                <FormGroup check row>
                  <Button color="warning" style={{  width : 130 }}>Cancel</Button>

                  <Button color="success" style={{ marginLeft: 30 , width : 130 }}>
                    Add
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Collapse>

      


      </div>
    );
  }
}

export default AddWorkerSkill;
