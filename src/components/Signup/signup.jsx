import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../../assets/styles/font.css";
import "../Navbar/simplenav";
import SimpleNavComponent from "../Navbar/simplenav";
import { Link } from "react-router-dom";
export default class SingupFormComponent extends React.Component {
  render() {
    return (
      <div>
        <SimpleNavComponent />
        
        <Form style={{ margin: "auto", width: 400, marginTop: 100 }}>
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
              type="name"
              name="name"
              id="examplename"
              placeholder="Name"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleemail"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password "
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
