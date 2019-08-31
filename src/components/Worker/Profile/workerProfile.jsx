import React, { Component } from "react";
import WorkerNavComponent from "../../Navbar/workernav";
import "../../../assets/styles/font.css";
import WorkerEditProfileComponent from "./workerEditProfile";

class WorkerProfileComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <WorkerNavComponent />
        <WorkerEditProfileComponent />
      </div>
    );
  }
}

export default WorkerProfileComponent;

//this component should be executed when worker clicked login
