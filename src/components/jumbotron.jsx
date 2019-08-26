import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import "../styles/jumbotron.css";

class JumbotronComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          style={{
            backgroundImage:
              "url(" +
              "https://43wli92bfqd835mbif2ms9qz-wpengine.netdna-ssl.com/wp-content/uploads/ECI_JOBS_slider.jpg" +
              ")",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 350
          }}
        >
          <h1
            className="display-3"
            style={{
              marginLeft: 200,
              fontFamily: "Josefin Sans",
              fontSize: 70
            }}
          >
            Hire Workers!
          </h1>
          <p
            className="lead"
            style={{
              marginLeft: 200,
              fontFamily: "Shadows Into Light",
              fontSize: 30
            }}
          >
            Make things happen.
          </p>
          <hr className="my-2" />
          {/* <p style={{ marginLeft: 200 }}>
            Get matched to top talent in minutes through our Sri Lankan network
            of skilled people.
          </p> */}
        </Jumbotron>
      </div>
    );
  }
}

export default JumbotronComponent;
