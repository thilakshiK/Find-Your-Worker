import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../../assets/styles/font.css";
import SimpleNavComponent from "../Navbar/simplenav";
import { Link } from "react-router-dom";
import axios from 'axios';
export default class SingupFormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : "",
      phonenumber : ""

    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePhoneNumberChange = this.handlePasswordChange.bind(this);


  }

  handleEmailChange(event) {
    this.setState({email : event.target.value});
  }

  handleSubmit(event) {
    //
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }

  handlePhoneNumberChange(event){
    this.setState({phonenumber : event.target.value});
  }




  render() {
    return (
      <div>
        <SimpleNavComponent />
        
        <Form style={{ margin: "auto", width: 400, marginTop: 100 }} onSubmit = {this.handleSubmit}>
          <h3
            style={{
              fontFamily: "Josefin Sans",
              textAlign: "center",
              marginBottom: 20
            }}
          >
            Get your free account
          </h3>
          

          <FormGroup>
            <Input
              type="email"
              value = {this.state.email}
              onChange = {this.handleEmailChange}
              placeholder="Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value = {this.state.password}
              onChange = {this.handlePasswordChange}
              placeholder="Password "
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              value = {this.state.phonenumber}
              onChange = {this.handlePhoneNumberChange}
              placeholder="Contact Number"
            />
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="radio1" style={{ marginLeft: 50 }} />{" "}
              Worker
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="radio1" style={{ marginLeft: 150 }} />
              User
            </Label>
          </FormGroup>

          <Button color="success" style={{ marginLeft: 140, marginTop: 30 }}>
            Sign Me Up
          </Button>

          <h6
            style={{
              fontFamily: "Josefin Sans",
              textAlign: "center",
              marginTop: 20
            }}
          >
            Already have an account? <Link to="/login"> Log In </Link>
          </h6>
        </Form>
      </div>
    );
  }
}
