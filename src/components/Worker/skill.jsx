import React, { Component } from "react";
import { Button, CardBody, Card, Input, Form, FormGroup } from "reactstrap";

class SkillComponent extends Component {
  state = {};

  handleEditSkill = () => {
      let form3 =  document.getElementById("form3");
      form3.style.display = "none";
      let form4 = document.getElementById("form4");
      form4.style.display = "block";

  }

  handleUpdateProfile = () => {
    let form4 = document.getElementById("form4");
    form4.style.display = "none";
    let form3 = document.getElementById("form3");
    form3.style.display = "block";
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form style={{ padding: 40 }} id = "form3">
              <FormGroup row>
                {/* <Label for="exampleSelect">Skill Type</Label> */}
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
                  placeholder="description" disabled
                />
              </FormGroup>

              <FormGroup row>
                <Input
                  type="text"
                  name="hrate"
                  id="hrate"
                  placeholder="hourly rate" disabled
                />
              </FormGroup>

              <FormGroup check row>
                <Button color="danger" style={{ width: 130 }}>
                  Delete
                </Button>

                <Button color="success" style={{ marginLeft: 30, width: 130 }} onClick = {this.handleEditSkill}>
                  Edit
                </Button>
              </FormGroup>
            </Form>

            <Form style={{ padding: 40 }} id = "form4">
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
                <Button color="success" style={{ width: 130 }} onClick = {this.handleUpdateProfile} >
                  Update
                </Button>

                <Button color="warning" style={{ marginLeft: 30, width: 130 }} >
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SkillComponent;
