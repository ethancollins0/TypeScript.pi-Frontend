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
      res ? console.log("success") : redirect();
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Hiya</h1>
      </div>
    );
  }
}

export default withRouter(Home);
