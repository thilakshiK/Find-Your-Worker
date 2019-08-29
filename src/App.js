import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeComponent from "./components/Welcome/welcome";
import LoginFormComponent from "./components/Login/login";
import SingupFormComponent from "./components/Signup/signup";
import WorkerHomeComponent from "./components/Worker/workerHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeComponent}></Route>
          <Route path="/login" component={LoginFormComponent}></Route>
          <Route path="/signup" component={SingupFormComponent}></Route>
          <Route path="/worker/profile" component={WorkerHomeComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
