import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import OngoingJobComponent from "./ongoingjobs";
import UpcomingJobComponent from "./upcomingjobs";
import CompletedJobComponent from "./completedjobs";
import WorkerNavComponent from "../../Navbar/workernav";
import "../../../assets/styles/font.css";
import axios from "axios";

class WorkerJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedOrderDetails: [],
      upcomingOrderDetails: [],
      ongoingdOrderDetails: []
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
      .get("http://localhost:3000/ordersWorker/getCompletedOrders/" + userId, {
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

    //get upcoming order details

    axios
      .get("http://localhost:3000/ordersWorker/getUpComingOrders/4" , {
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

    //get ongoing order details

    axios
      .get("http://localhost:3000/ordersWorker/getOngoingOrders/" + userId, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.result[0].length != 0) {
          this.setState({
            ongoingdOrderDetails: res.data.result[0]
          });
        } else {
          this.setState({
            ongoingdOrderDetails: []
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

  loadOngoingJobComponent() {
    return this.state.ongoingdOrderDetails.map(function(object, i) {
      return <OngoingJobComponent obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <WorkerNavComponent />

        <Container style={{ marginTop: 40 }}>
          <Row>
            <Col sm="4" style={{ backgroundColor: "#ecf4f3" }}>
              <h5 style={this.h5}>Ongoing Jobs</h5>
              {this.loadOngoingJobComponent()}
            </Col>
            {/* xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }} */}
            <Col sm="4" style={{ backgroundColor: "#ffffc5" }}>
              <h5 style={this.h5}>Upcoming Jobs</h5>
              {this.loadUpcomingJobComponent()}
            </Col>

            <Col sm="4" style={{ backgroundColor: "#d1eecc" }}>
              <h5 style={this.h5}>Completed Jobs</h5>

              {this.loadCompletedJobComponent()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WorkerJobComponent;
