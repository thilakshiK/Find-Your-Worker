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

import axios from "axios";
import Select from "react-select";
let skillList = [];

class AddWorkerSkill extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      skill: "",
      description: "",
      hrate: "",
      skillId: ""
    };

    this.handleCancelAddingSkill = this.handleCancelAddingSkill.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleHourRateChange = this.handleHourRateChange.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  handleCancelAddingSkill(event) {
    //event.preventDefault();
  }

  handleSkillChange(skill) {
    this.setState(
      {
        skill: skill,
        skillId: skill.value
      },
      () => console.log("skill id is ", this.state.skillId)
    );
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleHourRateChange(event) {
    this.setState({ hrate: event.target.value });
  }

  handleAddSkill() {
    const userId = localStorage.getItem("UserId");
    const skillObject = {
      skillObj: [
        {
          skillId: this.state.skillId,
          description: this.state.description,
          hrate: this.state.hrate
        }
      ]
    };
    axios
      .post("http://localhost:3000/worker/skill/" + userId, skillObject, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState(
          {
            skill: "",
            description: "",
            hrate: ""
          },
          () => {
            document.location.reload();
          }
        );
      });
  }

  componentDidMount() {
    // worker skill selection

    axios
      .get("http://localhost:3000/dataservices/getallskills", {
        withCredentials: true
      })
      .then(res => {
        let temArray = {};

        for (let i = 0; i < res.data.recordsets[0].length; i++) {
          temArray["value"] = res.data.recordsets[0][i].SkillId;
          temArray["label"] = res.data.recordsets[0][i].SkillTitle;
          skillList.push(temArray);
          temArray = {};
        }
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Label xs={4} sm={4} style={{ marginLeft: 80, marginTop: 40 }}>
              Skills
            </Label>
            <Button
              xs={4}
              sm={4}
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
                <FormGroup>
                  {/* <Label for="exampleSelect">Skill Type</Label> */}
                  {/* <Input type="select" name="select" id="exampleSelect">
                    <option>Mechanic</option>
                    <option>Driver</option>
                  </Input> */}
                  <Select
                    value={this.state.skill}
                    onChange={this.handleSkillChange}
                    options={skillList}
                    placeholder="Skills"
                  />
                </FormGroup>
                <FormGroup row>
                  <Input
                    type="textarea"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="description"
                  />
                </FormGroup>

                <FormGroup row>
                  <Input
                    type="number"
                    value={this.state.value}
                    onChange={this.handleHourRateChange}
                    placeholder="hourly charge"
                  />
                </FormGroup>

                <FormGroup row style={{ marginTop: 20 }}>
                  <Col xs={{ size: 5 }} sm={4}>
                    <Button
                      color="warning"
                      style={{ width: 100 }}
                      //onClick={this.handleCancelAddingSkill}
                    >
                      Cancel
                    </Button>
                  </Col>

                  <Col xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }}>
                    <Button
                      color="success"
                      onClick={this.handleAddSkill}
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
