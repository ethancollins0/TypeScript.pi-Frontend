import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import Authenticate from "./components/authenticate/Authenticate";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import "./styles.scss";
import ValidateToken from "./ValidateToken";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const validate = new ValidateToken();
const baseUrl = "http://localhost:3001";

export default class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.checkToken();
  }

  checkToken = () => {
    return validate.checkToken(baseUrl).then(res => {
      return res
        ? this.setState({ loggedIn: true }, () => {
            return true;
          })
        : this.setState({ loggedIn: false }, () => {
            cookies.remove("token");
            return false;
          });
    });
  };

  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <Route path="/authenticate">
              <Authenticate checkToken={this.checkToken} baseUrl={baseUrl} />
            </Route>
            <Route path="/home">
              <Navbar />
              {this.state.loggedIn ? (
                <Home baseUrl={baseUrl} />
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
