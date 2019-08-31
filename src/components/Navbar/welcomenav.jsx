import React from "react";
//import "../../styles/font.css";
import "../../assets/styles/font.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
  Container
} from "reactstrap";

import { Link } from "react-router-dom";

export default class NavbarComponent extends React.Component {
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
            {/* <Form inline>
              <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Find Services"
                />
              </FormGroup>
              <Button color="success" style={{ marginLeft: 10 }}>
                Search
              </Button>
            </Form> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/login"> LOG IN </Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup" style={{ margin: 30 }}>
                    SIGN UP
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
