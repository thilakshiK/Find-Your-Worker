import React, { Component } from "react";
import WorkerNavComponent from "../Navbar/workernav";
import "../../assets/styles/font.css";
import WorkerProfileComponent from "./workerProfile";
import { Col, Row } from "reactstrap";

class WorkerHomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <WorkerNavComponent />
        <WorkerProfileComponent />
      </div>
    );
  }
}

export default WorkerHomeComponent;

//this component should be executed when worker clicked login
