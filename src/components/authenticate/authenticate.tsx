import React, { Component } from "react";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ValidateToken from "../../ValidateToken";
const validate = new ValidateToken();

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

  componentDidMount() {
    validate.checkToken(this.props.baseUrl).then(res => {
      res ? this.props.history.push("/home") : console.log("no token");
    });
  }

  handleChangeForm = (event: any): void => {
    this.setState({ signup: !this.state.signup });
  };

  attemptLogin = (formInputs: { email: string; password: string }): void => {
    const { email, password } = formInputs;
    const baseUrl = this.props.baseUrl;
    fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true"
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password
      })
    }).then((res: any) => {
      if (res.status == 200) {
        this.props.history.push("/home");
      } else {
        res.status == 401
          ? alert("Invalid credentials")
          : alert("internal error 501");
      }
    });
  };

  attemptSignup = (formInputs: {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
  }) => {
    const { email, name, password } = formInputs;
    fetch(this.props.baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true"
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        name,
        password
      })
    }).then((res: any) => {
      if (res.status == 200) {
        this.props.history.push("/home");
      } else {
        res.status == 401
          ? alert("Invalid credentials")
          : alert("internal error 501");
      }
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
            <Signup
              changeForm={this.handleChangeForm}
              attemptSignup={this.attemptSignup}
            />
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
