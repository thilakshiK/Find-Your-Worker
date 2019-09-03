import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeComponent from "./components/Welcome/welcome";
import LoginFormComponent from "./components/Login/login";
import SingupFormComponent from "./components/Signup/signup";
import WorkerProfileComponent from "./components/Worker/Profile/workerProfile";
import WorkerJobComponent from "./components/Worker/Job/workerjobs";
import WorkerRequestComponent from "./components/Worker/Request/workerRequest";
import ClientProfileComponent from "./components/Client/Profile/clientProfile";
import BookingComponent from "./components/Client/Booking/booking";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeComponent}></Route>
          <Route path="/login" component={LoginFormComponent}></Route>
          <Route path="/signup" component={SingupFormComponent}></Route>
          <Route path="/workerProfile" component={WorkerProfileComponent}></Route>
          <Route path="/workerJob" component = {WorkerJobComponent}></Route>
          <Route path="/workerRequest" component = {WorkerRequestComponent}></Route>
          <Route path="/clientProfile" component={ClientProfileComponent}></Route>
          <Route path="/clientBooking" component={BookingComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
