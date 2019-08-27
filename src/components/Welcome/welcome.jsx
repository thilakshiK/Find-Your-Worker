import React, { Component } from "react";
import NavbarComponent from "../Navbar/welcomenav";
import JumbotronComponent from "./jumbotron";
import { Link } from "react-router-dom";

export default class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
      </div>
    );
  }
}
