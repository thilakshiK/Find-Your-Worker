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
import ClientOrderComponent from "./components/Client/Orders/clientorders";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PrivateRoute} from './privateRoute';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeComponent}></Route>
          <Route path="/login" component={LoginFormComponent}></Route>
          <Route path="/signup" component={SingupFormComponent}></Route>
          <PrivateRoute
            path="/workerProfile"
            component={WorkerProfileComponent}
          ></PrivateRoute>
          <PrivateRoute path="/workerJob" component={WorkerJobComponent}></PrivateRoute>
          <PrivateRoute
            path="/workerRequest"
            component={WorkerRequestComponent}
          ></PrivateRoute>
          <PrivateRoute
            path="/clientProfile"
            component={ClientProfileComponent}
          ></PrivateRoute>
          <PrivateRoute path="/clientBooking" component={BookingComponent}></PrivateRoute>
          <PrivateRoute path="/clientOrder" component={ClientOrderComponent}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
