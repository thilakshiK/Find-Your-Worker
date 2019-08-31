import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import TodayJobComponent from "./todayjobs";
import UpcomingJobComponent from "./upcomingjobs";
import WorkerNavComponent from "../../Navbar/workernav";

class WorkerJobComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <WorkerNavComponent />

        <Container>
          <Row>
            <Col sm="6" style={{ backgroundColor: "blue" }}>
              <TodayJobComponent />
              <TodayJobComponent />
              <TodayJobComponent />
            </Col>

            <Col sm="6" style={{ backgroundColor: "green"}}>
              <UpcomingJobComponent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WorkerJobComponent;
