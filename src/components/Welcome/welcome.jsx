import React, { Component } from "react";
import NavbarComponent from "./navbar";
import JumbotronComponent from "./jumbotron";

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
