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

class SkillComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      skill: "",
      description: "",
      hourlyRate: "",
      skillId : this.props.obj.SkillId
    };

    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleHourRateChange = this.handleHourRateChange.bind(this);
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this);
  }

  handleSkillChange(skill) {
    this.setState({ skill });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleHourRateChange(event) {
    this.setState({ hourlyRate: event.target.value });
  }

  handleDeleteSkill() {
    
    const userId = localStorage.getItem("UserId");
    const skill = {
      skillId:parseInt(this.state.skillId)  
    };

    console.log(skill)
    axios
      .delete("http://localhost:3000/worker/skill/" + userId, {data: skill}, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        document.location.reload();
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  componentWillMount() {
    const userId = localStorage.getItem("UserId");
    this.setState({
      userId: userId,
      description: this.props.obj.Description,
      hourlyRate: this.props.obj.HourlyCharge
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form style={{ padding: 40 }}>
              <FormGroup>
                <Input type="text" value={this.props.obj.SkillTitle} disabled />
              </FormGroup>
              <FormGroup row>
                <Input
                  type="textarea"
                  value={this.props.obj.Description}
                  placeholder="description"
                  disabled
                />
              </FormGroup>

              <FormGroup row>
                <Input
                  type="number"
                  value={this.props.obj.HourlyCharge}
                  placeholder="hourly charge"
                  disabled
                />
              </FormGroup>

              <FormGroup row style={{ marginTop: 20 }}>
                <Col xs={{ size: 6 }} sm={6}>
                  <Button
                    color="danger"
                    style={{ width: 100 }}
                    onClick={this.handleDeleteSkill}
                  >
                    Delete
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
