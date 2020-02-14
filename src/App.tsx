import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Authenticate from "./components/authenticate/Authenticate";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import "./styles.scss";
import ValidateToken from "./ValidateToken";
const validate = new ValidateToken();

const baseUrl = "http://localhost:3001";

export default class App extends Component {
  state = {
    loggedIn: false
  };

  componentWillMount() {
    validate.checkToken(baseUrl).then(res => {
      res
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/authenticate">
              <Authenticate baseUrl={baseUrl} />
            </Route>
            <Route path="/home">
              {this.state.loggedIn ? (
                <div>
                  <Navbar />
                  <Home baseUrl={baseUrl} />
                </div>
              ) : (
                <Redirect to="/authenticate" />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
