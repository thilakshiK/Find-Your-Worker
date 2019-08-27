import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from "reactstrap";

export default class SimpleNavComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" className="mx-auto" light expand="md">
          <Container style={{ marginTop: 20, marginBottom: 20 }}>
            <NavbarBrand
              href="/"
              style={{ fontFamily: "Courgette", fontSize: 20 }}
            >
              Find Your Worker
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
