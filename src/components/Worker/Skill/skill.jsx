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

import axios from "axios";
import Select from "react-select";

let skillList = [];

class SkillComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      skill : ""
    };

    this.handleEditSkill = this.handleEditSkill.bind(this)
    this.handleUpdateSkill = this.handleUpdateSkill.bind(this)
    this.handleCancelSkill = this.handleCancelSkill.bind(this)
    this.handleSkillChange = this.handleSkillChange.bind(this)

  }

  handleSkillChange (skill){
    this.setState({skill})

  }

  handleEditSkill () {
    let disableEditWorkerSkill = document.getElementById(
      "disableEditWorkerSkill"
    );
    disableEditWorkerSkill.style.display = "none";
    let enableEditWorkerSkill = document.getElementById(
      "enableEditWorkerSkill"
    );
    enableEditWorkerSkill.style.display = "block";
  };

  handleUpdateSkill () {
    let enableEditWorkerSkill = document.getElementById(
      "enableEditWorkerSkill"
    );
    enableEditWorkerSkill.style.display = "none";
    let disableEditWorkerSkill = document.getElementById(
      "disableEditWorkerSkill"
    );
    disableEditWorkerSkill.style.display = "block";
  };

  handleCancelSkill () {
    let enableEditWorkerSkill = document.getElementById(
      "enableEditWorkerSkill"
    );
    enableEditWorkerSkill.style.display = "none";
    let disableEditWorkerSkill = document.getElementById(
      "disableEditWorkerSkill"
    );
    disableEditWorkerSkill.style.display = "block";
  };

  componentWillMount() {
    const userId = localStorage.getItem("UserId");
    this.setState({
      userId: userId
    });
  }

  componentDidMount() {

    // worker skill selection
    axios
      .get("http://localhost:3000/dataservices/getallskills", {
        withCredentials: true
      })
      .then(res => {
        console.log("skill", res.data.recordsets[0]);
        let i = 0;
        let temArray = {};
        for (i; i < res.data.recordsets[0].length; i++) {
          temArray["value"] = res.data.recordsets[0][i].SkillId;
          temArray["label"] = res.data.recordsets[0][i].SkillTitle;
          skillList.push(temArray);
          temArray = {}
        }

        console.log("skilllist" , skillList)
      })
      .catch(function(error) {
        // console.log(error);
      });


      //worker skill details selection


      axios.get()


  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            {/* disable edit worker skill  */}

            <Form style={{ padding: 40 }} id="disableEditWorkerSkill">
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

            {/* enable edit worker skill  */}

            <Form
              style={{ padding: 40, display: "none" }}
              id="enableEditWorkerSkill"
            >
              <FormGroup >
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
