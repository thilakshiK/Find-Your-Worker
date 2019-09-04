import React from "react";
import { Button, Form, FormGroup, Input , Alert} from "reactstrap";
import "../../assets/styles/font.css";
//import "../simplenav";
import SimpleNavComponent from "../Navbar/simplenav";
import { Link } from "react-router-dom";
import axios from "axios";

export default class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      visibleFailure : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // onDismissFailure(){
  //   this.setState({visibleFailure :false});
  // }

  handleSubmit(event) {
    event.preventDefault();

    const loginDetails = {
      UserEmail: this.state.email,
      Password: this.state.password
    };

    axios
      .post("http://localhost:3000/user/login", loginDetails, {withCredentials: true})
      .then(res => {
        
        
        if (res.data.message === "Authorized") {
          this.setState({
            email : "",
            password : ""
  
          });
          localStorage.setItem('sessionType', res.data.result.sessionType);
          localStorage.setItem("UserId" , res.data.result.UserId);
          if(res.data.result.sessionType  == "worker"){
            this.props.history.push({pathname : "/workerProfile"})

          }else{
            this.props.history.push({pathname : "/clientProfile"})

          }
         
        }else{
          this.setState({
            email : "",
            password : "",
            visibleFailure : true
          })
        }
      });
  }

  render() {
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
            Log in and get to work
          </h3>
          <FormGroup>
            <Input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password "
              required
            />
          </FormGroup>

          <Alert
            color="danger"
            isOpen={this.state.visibleFailure}
            // toggle={this.onDismissFailure}
          >
            Invalid Credentials ! 
          </Alert>

          <Input
            type="submit"
            value="Login"
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
            New to Find Your Worker? <Link to="/signup"> Sign Up </Link>
          </h6>
        </Form>
      </div>
    );
  }
}
