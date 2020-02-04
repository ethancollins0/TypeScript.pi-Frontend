import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticate from "./components/authenticate/Authenticate";
import Home from "./components/home/Home";
import "./styles.scss";

const baseUrl = "http://localhost:3001";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/authenticate">
              <Authenticate baseUrl={baseUrl} />
            </Route>
            <Route path="/home">
              <Home baseUrl={baseUrl} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
