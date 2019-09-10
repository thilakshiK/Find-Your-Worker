import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "../../../assets/styles/font.css";

class CancelledJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      orderDate : ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount(){
      this.setState({
        orderDate: new Date(this.props.obj.OrderDate)
        .toUTCString()
        .split(" ")
        .slice(1, 4)
        .join(" ")
      })
  }
  render() {
    return (
      <div style={{ fontFamily: "Josefin Sans" }}>
        <Button
          color="success"
          onClick={this.toggle}
          style={{ width: 300, margin: 20 }}
        >
          {this.props.obj.OrderId}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Completed Order</ModalHeader>
          <ModalBody style={{ fontFamily: "Josefin Sans" }}>
            <Form>
              <FormGroup>
                <Label for="workerFirstName">Worker First Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.FirstName}
                  id="workerFirstName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="workerLastName">Worker Last Name</Label>
                <Input
                  type="text"
                  value={this.props.obj.LastName}
                  id="workerLastName"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="orderdate">Order Date</Label>
                <Input
                  type="text"
                  value={this.state.orderDate}
                  id="orderdate"
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label for="cancelReason">Reason to Cancel</Label>
                <Input
                  type="textarea"
                  value={this.props.obj.CancellationReason}
                  id="cancelReason"
                  disabled
                />
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CancelledJobComponent;
