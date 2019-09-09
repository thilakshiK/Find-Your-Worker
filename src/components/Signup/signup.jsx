import React from "react";
import { Form, FormGroup, Input, Alert } from "reactstrap";
import "../../assets/styles/font.css";
import SimpleNavComponent from "../Navbar/simplenav";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

export default class SingupFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phonenumber: "",
      usertype: "",
      visibleSuccess: false,
      visibleFailure: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismissSuccess = this.onDismissSuccess.bind(this);
    this.onDismissFailure = this.onDismissFailure.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlePhoneNumberChange(event) {
    this.setState({ phonenumber: event.target.value });
  }

  handleSelect(usertype) {
    this.setState({ usertype: usertype });
  }

  onDismissSuccess() {
    this.setState({ visibleSuccess: false });
  }

  onDismissFailure() {
    this.setState({ visibleFailure: false });
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.phonenumber.length < 11
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const registrationDetails = {
      UserEmail: this.state.email,
      Password: this.state.password,
      ContactNumber: this.state.phonenumber,
      UserType: this.state.usertype.value
    };

    axios
      .post("http://127.0.0.1:3000/user/register", registrationDetails)
      .then(res => {
        if (res.data.message === "User Created") {
          this.setState({
            email: "",
            password: "",
            phonenumber: "",
            usertype: "",
            visibleSuccess: true
          });
        } else {
          this.setState({
            email: "",
            password: "",
            phonenumber: "",
            usertype: "",
            visibleFailure: true
          });
        }
      });
  }

  render() {
    const options = [
      { value: 0, label: "Client" },
      { value: 1, label: "Worker" }
    ];
    return (
      <div>
        <SimpleNavComponent />

        <Form
          style={{ margin: "auto", width: 400, marginTop: 100 }}
          onSubmit={this.handleSubmit}
        >
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
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Email"
              id="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password "
              id="password"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              value={this.state.phonenumber}
              onChange={this.handlePhoneNumberChange}
              placeholder="Contact Number"
              id="contactno"
              required
            />
          </FormGroup>

          <FormGroup>
            <Select
              options={options}
              placeholder="User Type"
              name="userType"
              onChange={this.handleSelect}
              value={this.state.usertype}
            ></Select>
          </FormGroup>

          <Alert
            color="success"
            isOpen={this.state.visibleSuccess}
            toggle={this.onDismissSuccess}
          >
            Registration Successfull ! Please Login to Continue
          </Alert>

          <Alert
            color="danger"
            isOpen={this.state.visibleFailure}
            toggle={this.onDismissFailure}
          >
            User already exists !
          </Alert>

          <Input
            type="submit"
            value="Sign Me Up"
            className="btn btn-success"
            disabled={!this.validateForm()}
            style={{ marginTop: 30 }}
          ></Input>

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
