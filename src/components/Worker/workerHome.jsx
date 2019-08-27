import React, { Component } from "react";
import WorkerNavComponent from "../Navbar/workernav";
import "../../assets/styles/font.css";

class WorkerHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <WorkerNavComponent />
      </div>
    );
  }
}

export default WorkerHome;

//this component should be executed when worker clicked login
