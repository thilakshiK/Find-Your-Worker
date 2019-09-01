import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import TodayJobComponent from "./todayjobs";
import UpcomingJobComponent from "./upcomingjobs";
import CompletedJobComponent from "./completedjobs";
import WorkerNavComponent from "../../Navbar/workernav";
import "../../../assets/styles/font.css";


class WorkerJobComponent extends Component {
  state = {};
  
 h5 = {
  fontFamily: "Josefin Sans" ,
  textAlign : "center",
  marginTop : 20
  };
  render() {
    return (
      <div>
        <WorkerNavComponent />

        <Container style = {{marginTop : 40}}>
          <Row>
            <Col sm="4"  style={{ backgroundColor: "#ecf4f3" }}>
              <h5 style = {this.h5}>Jobs for Today</h5>
            <TodayJobComponent  jobid = {1001}/>
            <TodayJobComponent  jobid = {1032}/>
            </Col>
            {/* xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }} */}
            <Col sm="4" style={{ backgroundColor: "#ffffc5"}}>
            <h5 style = {this.h5}>Upcoming Jobs</h5>
              <UpcomingJobComponent jobid = {4567}/>
            </Col>

            <Col sm="4" style={{ backgroundColor: "#d1eecc" }}>
            <h5 style = {this.h5}>Completed Jobs</h5>

            <CompletedJobComponent jobid = {1111}/>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WorkerJobComponent;
