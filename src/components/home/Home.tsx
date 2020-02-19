import React, { Component } from "react";
import ValidateToken from "../../ValidateToken";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import SystemCard from "./SystemCard";

const validate = new ValidateToken();
const cookies = new Cookies();

interface Props extends RouteComponentProps<any> {
  baseUrl: string;
  systems: any;
  setSystems: Function;
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

  renderSystems = () => {
    return this.props.systems.map((system: any, index: number) => {
      return <SystemCard pi={system} key={index} />;
    });
  };

  getSystems = () => {
    fetch(this.props.baseUrl + "/systems", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers": "true"
      },
      credentials: "include"
    }).then(res => {
      res.status == 200
        ? res.json().then(res => this.props.setSystems(res.systems))
        : res.status == 401
        ? console.log("unauthorized")
        : console.log("server error");
    });
  };

  render() {
    return (
      <div className="home">
        <section className="system-card-container">
          {this.renderSystems()}
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
