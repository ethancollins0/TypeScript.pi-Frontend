import React, { Component } from "react";
import ValidateToken from "../../ValidateToken";
import { RouteComponentProps, withRouter } from "react-router-dom";
const validate = new ValidateToken();

interface Props extends RouteComponentProps<any> {
  baseUrl: string;
}

class Home extends Component<Props> {
  componentWillMount() {
    validate.checkToken(this.props.baseUrl).then(res => {
      res ? console.log("success") : this.props.history.push("/authenticate");
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
