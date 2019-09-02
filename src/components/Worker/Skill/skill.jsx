import React, { Component } from "react";
import {
  Button,
  CardBody,
  Card,
  Input,
  Form,
  FormGroup,
  Col
} from "reactstrap";

class SkillComponent extends Component {
  state = {};

  handleEditSkill = () => {
    let form3 = document.getElementById("form3");
    form3.style.display = "none";
    let form4 = document.getElementById("form4");
    form4.style.display = "block";
  };

  handleUpdateSkill = () => {
    let form4 = document.getElementById("form4");
    form4.style.display = "none";
    let form3 = document.getElementById("form3");
    form3.style.display = "block";
  };

  handleCancelSkill = () => {
    let form4 = document.getElementById("form4");
    form4.style.display = "none";
    let form3 = document.getElementById("form3");
    form3.style.display = "block";
  };
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form style={{ padding: 40 }} id="form3">
              <FormGroup row>
                <Input type="select" name="select" id="exampleSelect" disabled>
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
                  disabled
                />
              </FormGroup>

              <FormGroup row>
                <Input
                  type="text"
                  name="hrate"
                  id="hrate"
                  placeholder="hourly charge"
                  disabled
                />
              </FormGroup>

              <FormGroup row style={{ marginTop: 20 }}>
                <Col xs={{ size: 5 }} sm={4}>
                  <Button color="danger" style={{ width: 100 }}>
                    Delete
                  </Button>
                </Col>

                <Col xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }}>
                  <Button
                    color="success"
                    onClick={this.handleEditSkill}
                    style={{ width: 100 }}
                  >
                    Edit
                  </Button>
                </Col>
              </FormGroup>
            </Form>

            <Form style={{ padding: 40, display: "none" }} id="form4">
              <FormGroup row>
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
                    color="success"
                    style={{ width: 100 }}
                    onClick={this.handleUpdateSkill}
                  >
                    Update
                  </Button>
                </Col>

                <Col xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }}>
                  <Button
                    color="warning"
                    onClick={this.handleCancelSkill}
                    style={{ width: 100 }}
                  >
                    Cancel
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SkillComponent;
