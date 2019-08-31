import React, { Component } from "react";
import NavbarComponent from "../Navbar/welcomenav";
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
