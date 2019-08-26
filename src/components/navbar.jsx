import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
  Button,
  Container
} from "reactstrap";

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
            <NavbarBrand href="/">Find Your Worker</NavbarBrand>
            <Form inline>
              <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Find Services"
                />
              </FormGroup>
              <Button color="success" style={{ marginLeft: 5 }}>
                Search
              </Button>
            </Form>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">LOG IN</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    SIGN UP
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
