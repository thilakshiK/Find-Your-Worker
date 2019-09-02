import React, { Component } from "react";
import "../../assets/styles/font.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";
import { Link } from "react-router-dom";

class ClientNavComponent extends Component {
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
            <a class="navbar-brand" href="#">
              <img
                src="data:image/png;base64,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"
                width="60"
                height="60"
                alt=""
              ></img>
            </a>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {/* add profile picture */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/client/profile">My Profile</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/client/order">My Orders</Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/"> Log Out </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default ClientNavComponent;
