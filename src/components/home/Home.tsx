import React, { Component } from "react";
import ValidateToken from "../../ValidateToken";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const validate = new ValidateToken();
const cookies = new Cookies();

interface Props extends RouteComponentProps<any> {
  baseUrl: string;
}

class Home extends Component<Props> {
  componentDidMount() {
    const redirect = () => {
      cookies.remove("token");
      this.props.history.push("/authenticate");
    };

    validate.checkToken(this.props.baseUrl).then(res => {
      res ? this.getSystems() : redirect();
    });
  }

  getSystems = () => {
    fetch(this.props.baseUrl + "/systems", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers": "true"
      },
      credentials: "include"
    }).then(res => {
      res.status == 200
        ? res.json().then(res => console.log(res.systems))
        : res.status == 401
        ? console.log("unauthorized")
        : console.log("server error");
    });
  };

  render() {
    return (
      <div className="home">
        <h1>Hiya</h1>
      </div>
    );
  }
}

export default withRouter(Home);
