import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Input,
  Form,
  FormGroup,
  Label,
  Row,
  Col
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
        <Row>
          <Col>
          <Label xs={4} sm={4} style={{ marginLeft: 80, marginTop: 40 }}>
          Skills
        </Label>
        <Button xs={4} sm={4}
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem", marginLeft: 40 }}
        >
          Add New
        </Button>
          </Col>
        </Row>
        
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
                    placeholder="hourly charge"
                  />
                </FormGroup>

                <FormGroup row style={{ marginTop: 20 }}>
                  <Col xs={{ size: 5 }} sm={4}>
                    <Button
                      color="warning"
                      style={{ width: 100 }}
                    >
                      Cancel
                    </Button>
                  </Col>

                  <Col xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }}>
                    <Button
                      color="success"
                      //onClick={}
                      style={{ width: 100 }}
                    >
                      Add
                    </Button>
                  </Col>
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
