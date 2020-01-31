import React, { Component } from "react";
import Login from "./forms/login";
import Signup from "./forms/signup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import StatusCodes from "../StatusCodes";
const checkStatus = new StatusCodes();

export default class Authenticate extends Component<{ baseUrl: string }> {
  state = {
    signup: false
  };

  handleChangeForm = (event: any): void => {
    this.setState({ signup: !this.state.signup });
  };

  attemptLogin = (formInputs: { email: string; password: string }): void => {
    const { email, password } = formInputs;
    const baseUrl = this.props.baseUrl;
    fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      checkStatus.checkCodes(res).then((result: any) => {
        typeof result == "number"
          ? alert(`Error Code ${result}`)
          : window.localStorage.setItem("token", result.token);
      });
    });
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
            <Login
              changeForm={this.handleChangeForm}
              attemptLogin={this.attemptLogin}
            />
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
