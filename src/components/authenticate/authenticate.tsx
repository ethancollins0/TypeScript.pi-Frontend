import React, { Component } from "react";
import Login from "./forms/login";
import Signup from "./forms/signup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Authenticate extends Component {
  state = {
    signup: false
  };

  handleChangeForm = (event: any): void => {
    this.setState({ signup: !this.state.signup });
  };

  render() {
    return (
      <div className="authenticate">
        <header className="form-header">
          <h2>{this.state.signup ? "Sign Up" : "Login"}</h2>
        </header>
        <ReactCSSTransitionGroup
          transitionName="initial-form"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.signup ? (
            <Signup changeForm={this.handleChangeForm} />
          ) : (
            <Login changeForm={this.handleChangeForm} />
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
