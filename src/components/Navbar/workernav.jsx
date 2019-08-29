import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";
import { BrowserRouter as router, Link } from "react-router-dom";

export default class WorkerNavComponent extends Component {
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
              style={{ fontFamily: "Courgette", fontSize: 20, marginLeft: 15 }}
            >
              Find Your Worker
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
            </Collapse>
          </Container>

          <Nav className="" navbar style={{ fontFamily: "Josefin Sans" }}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {/* add profile picture */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>Requests</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/"> Log Out </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    ); //
  }
}
