import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../assets/styles/font.css";
import WorkerNavComponent from "../../Navbar/workernav";
import PendingRequestComponent from "./pendingreq";
import ScheduledRequestComponent from "./scheduled";
import axios from "axios";

class WorkerRequestComponent extends Component {
   constructor(props){
     super(props)

     this.state = {
       requestDetails : []
     }
   }

  h5 = {
    fontFamily: "Josefin Sans",
    textAlign: "center",
    marginTop: 20
  };

  

  componentDidMount() {
    //get requests received to the worker
    const userId = localStorage.getItem("UserId");

    axios
    .get("http://localhost:3000/requests/pool/worker/" + userId , {
      withCredentials: true
    })
    .then(res => {
      console.log("here", res.data.result[0]);
     

      if (res.data.result[0].length !== 0) {
        this.setState({
          requestDetails: res.data.result[0]
        });
        
      } else {
        this.setState({
          requestDetails: []
        });
      }

     
    })
    .catch(function(error) {
      // console.log(error);
    });

   
  }

  loadPendingRequest(){
    if (this.state.requestDetails.length !== 0) {
      return this.state.requestDetails.map(function(object, i) {
        return <PendingRequestComponent obj={object} key={i} />;
      });
    }
  }

  render() {
    return (
      <div>
        <WorkerNavComponent />

        <Container style={{ marginTop: 40 }}>
          <Row>
            <Col sm="6" style={{ backgroundColor: "#ffb6b9" }}>
              <h5 style={this.h5}>Pending Requests</h5>
             {this.loadPendingRequest()}
            </Col>
            {/* xs={{ size: 6, offset: 1 }} sm={{ size: 4, offset: 1 }} */}
            {/* <Col sm="6" style={{ backgroundColor: "#c6f1d6" }}>
              <h5 style={this.h5}>Scheduled Requests</h5>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default WorkerRequestComponent;
