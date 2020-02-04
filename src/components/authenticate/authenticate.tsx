import React, { Component } from "react";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
  baseUrl: string;
}

class Authenticate extends Component<Props, { signup: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      signup: false
    };
  }

  handleChangeForm = (event: any): void => {
    this.setState({ signup: !this.state.signup });
  };

  attemptLogin = (formInputs: { email: string; password: string }): void => {
    const { email, password } = formInputs;
    const baseUrl = this.props.baseUrl;
    fetch(baseUrl + "/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      res.status == 200
        ? this.props.history.push("/home")
        : res.status == 401
        ? alert("Invalid credentials")
        : alert("internal error 501");
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

export default withRouter(Authenticate);
