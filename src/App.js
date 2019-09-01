import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeComponent from "./components/Welcome/welcome";
import LoginFormComponent from "./components/Login/login";
import SingupFormComponent from "./components/Signup/signup";
import WorkerProfileComponent from "./components/Worker/Profile/workerProfile";
import WorkerJobComponent from "./components/Worker/Job/workerjobs";
import WorkerRequestComponent from "./components/Worker/Request/workerRequest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeComponent}></Route>
          <Route path="/login" component={LoginFormComponent}></Route>
          <Route path="/signup" component={SingupFormComponent}></Route>
          <Route path="/worker/profile" component={WorkerProfileComponent}></Route>
          <Route path="/worker/job" component = {WorkerJobComponent}></Route>
          <Route path="/worker/request" component = {WorkerRequestComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
