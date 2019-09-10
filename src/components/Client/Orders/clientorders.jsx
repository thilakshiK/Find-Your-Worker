import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkerNavComponent from "../../Navbar/clientnav";
import UpcomingJobComponent from "./upcomingorder";
import CompletedJobComponent from "./completedorder";
import CancelledJobComponent from "./cancelledorder";
import "../../../assets/styles/font.css";

import axios from "axios";

class ClientOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedOrderDetails: [],
      upcomingOrderDetails: [],
      cancelledOrderDetails: []
    };
  }

  h5 = {
    fontFamily: "Josefin Sans",
    textAlign: "center",
    marginTop: 20
  };

  componentDidMount() {
    //get completed order details
    const userId = localStorage.getItem("UserId");
    axios
      .get("http://localhost:3000/ordersClient/completedorders/" + userId, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.result[0].length != 0) {
          this.setState({
            completedOrderDetails: res.data.result[0]
          });
        } else {
          this.setState({
            completedOrderDetails: []
          });
        }
      })
      .catch(function(error) {
        // console.log(error);
      });

    //get accepted order details

    axios
      .get("http://localhost:3000/ordersClient/upcomingjobs/" + userId, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.result[0].length != 0) {
          this.setState({
            upcomingOrderDetails: res.data.result[0]
          });
        } else {
          this.setState({
            upcomingOrderDetails: []
          });
        }
      })
      .catch(function(error) {
        // console.log(error);
      });

    //get cancelled order details

    axios
      .get("http://localhost:3000/ordersClient/cancelledjobs/" + userId, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.result[0].length != 0) {
          this.setState({
            cancelledOrderDetails: res.data.result[0]
          });
        } else {
          this.setState({
            cancelledOrderDetails: []
          });
        }
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  loadCompletedJobComponent() {
    return this.state.completedOrderDetails.map(function(object, i) {
      return <CompletedJobComponent obj={object} key={i} />;
    });
  }

  loadUpcomingJobComponent() {
    return this.state.upcomingOrderDetails.map(function(object, i) {
      return <UpcomingJobComponent obj={object} key={i} />;
    });
  }

  loadCancelledJobComponent() {
    return this.state.cancelledOrderDetails.map(function(object, i) {
      return <CancelledJobComponent obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <WorkerNavComponent />

        <Container style={{ marginTop: 40 }}>
          <Row>
            <Col sm="4" style={{ backgroundColor: "#ecf4f3" }}>
              <h5 style={this.h5}>Cancelled Orders</h5>
              {this.loadCancelledJobComponent()}
            </Col>
            {/* xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }} */}
            <Col sm="4" style={{ backgroundColor: "#ffffc5" }}>
              <h5 style={this.h5}>Upcoming Orders</h5>
              {this.loadUpcomingJobComponent()}
            </Col>

            <Col sm="4" style={{ backgroundColor: "#d1eecc" }}>
              <h5 style={this.h5}>Completed Orders</h5>

              {this.loadCompletedJobComponent()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClientOrderComponent;
