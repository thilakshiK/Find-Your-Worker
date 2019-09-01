import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../../assets/styles/font.css";
import WorkerNavComponent from "../../Navbar/workernav";
import UrgentRequestComponent from "./urgent";
import ScheduledRequestComponent from "./scheduled";

class WorkerRequestComponent extends Component {
    state = {  }

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
            <Col sm="6"  style={{ backgroundColor: "#ffb6b9" }}>
              <h5 style = {this.h5}>Urgent Requests</h5>
              <UrgentRequestComponent />
           
            </Col>
            {/* xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }} */}
            <Col sm="6" style={{ backgroundColor: "#c6f1d6"}}>
            <h5 style = {this.h5}>Scheduled Requests</h5>

            <ScheduledRequestComponent/>
             
            </Col>

           
          </Row>
        </Container>
      </div>
         );
    }
}
 
export default WorkerRequestComponent;