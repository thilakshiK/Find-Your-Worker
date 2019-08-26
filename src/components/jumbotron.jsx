import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
//import { url } from "inspector";

class JumbotronComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3" style={{ marginLeft: 200 }}>
            Hire Workers!
          </h1>
          <p className="lead" style={{ marginLeft: 200 }}>
            Make things happen
          </p>
          <hr className="my-2" />
          <p style={{ marginLeft: 200 }}>
            Get matched to top talent in minutes through our Sri Lankan network
            of skilled people.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default JumbotronComponent;
