import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../styles/font.css";
import "./simplenav";
import SimpleNavComponent from "./simplenav";
export default class LoginFormComponent extends React.Component {
  render() {
    return (
      <div>
        <SimpleNavComponent />
        <Form style={{ margin: "auto", width: 400, marginTop: 100 }}>
          <h3 style={{ fontFamily: "Josefin Sans", textAlign: "center" , marginBottom : 20}}>
            Log in and get to work
          </h3>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
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
          <Button color="success" style ={{marginLeft : 150 , marginTop : 30}}>Submit</Button>
        </Form>
      </div>
    );
  }
}
