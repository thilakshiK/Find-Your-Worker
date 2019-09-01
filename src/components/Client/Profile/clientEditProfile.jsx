import React, { Component } from "react";

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Media
} from "reactstrap";

import "../../../assets/styles/font.css";

class ClientEditProfileComponent extends Component {
  state = {};

  handleEditProfile = () => {
    let form1 = document.getElementById("form1");
    form1.style.display = "none";
    let form2 = document.getElementById("form2");
    form2.style.display = "block";
  };

  handleUpdateProfile = () => {
    let form2 = document.getElementById("form2");
    form2.style.display = "none";
    let form1 = document.getElementById("form1");
    form1.style.display = "block";
  };
  render() {
    return (
      <Row style={{ marginTop: 50, fontFamily: "Josefin Sans", fontSize: 20 }}>
        <Col
          xs={{ size: 12 }}
          sm={{ size: 2, offset: 2 }}
          style={{ backgroundColor: "#ecf4f3" }}
        >
          <Media>
            <Media
              style={{
                width: 200,
                height: "auto",
                marginTop: 30,
                marginLeft: 20
              }}
              object
              src="data:image/png;base64,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"
              alt="Generic placeholder image"
            />
          </Media>

          <Button color="success" style={{ marginLeft: 40, marginTop: 20 }}>
            Upload New Photo
          </Button>
        </Col>

        <Col
          xs={{ size: 12 }}
          sm={{ size: 5, offset: 1 }}
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Form style={{ marginTop: 40, marginLeft: 50 }} id="form1">
            <FormGroup row>
              <Label for="firstName" xs={12} sm={5}>
                First Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="first name"
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" xs={12} sm={5}>
                Last Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="last name"
                  disabled
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="contactnumber" xs={12} sm={5}>
                Phone Number
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="contactnumber"
                  id="contactnumber"
                  placeholder="phone number"
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="locationSelect" xs={12} sm={5}>
                Base Location
              </Label>
              <Col xs={10} sm={6}>
                <Input type="select" name="select" id="locationSelect" disabled>
                  <option>Kollupitiya</option>
                  <option>Dehiwala</option>
                  {/* select base locations from db */}
                </Input>
              </Col>
            </FormGroup>

            <FormGroup check row style={{ marginTop: 20 }}>
              <Button color="success" onClick={this.handleEditProfile}>
                Edit Profile
              </Button>
            </FormGroup>
          </Form>

          <Form
            style={{ marginTop: 40, marginLeft: 50, display: "none" }}
            id="form2"
          >
            <FormGroup row>
              <Label for="firstName" xs={12} sm={5}>
                First Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="first name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" xs={12} sm={5}>
                Last Name
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="last name"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="contactnumber" xs={12} sm={5}>
                Phone Number
              </Label>
              <Col xs={10} sm={6}>
                <Input
                  type="text"
                  name="contactnumber"
                  id="contactnumber"
                  placeholder="phone number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="locationSelect" xs={12} sm={5}>
                Base Location
              </Label>
              <Col xs={10} sm={6}>
                <Input type="select" name="select" id="locationSelect">
                  <option>Kollupitiya</option>
                  <option>Dehiwala</option>
                  {/* select base locations from db */}
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row style={{ marginTop: 20 }}>
              <Col xs={{ size: 5 }} sm={5}>
                <Button
                  color="success"
                  onClick={this.handleUpdateProfile}
                  style={{ width: 140 }}
                >
                  Update Profile
                </Button>
              </Col>

              <Col xs={{ size: 6, offset: 1 }} sm={{ size: 5, offset: 1 }}>
                <Button
                  color="warning"
                  onClick={this.handleUpdateProfile}
                  style={{ width: 130 }}
                >
                  Cancel
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ClientEditProfileComponent;
