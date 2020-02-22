import React, { Component } from "react";
import copy from "copy-to-clipboard";
import SocketIOClient from "socket.io-client";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class SystemCard extends Component<{
  pi: any;
  startTime?: Date;
  baseUrl: string;
}> {
  state = {
    online: false,
    watering: false,
    token: "token loading..."
  };

  isOnline = () => {
    return this.state.online
      ? "display-button online"
      : "display-button offline";
  };

  isWatering = () => {
    return this.state.watering
      ? "display-button watering"
      : "display-button not-watering";
  };

  componentDidMount() {
    this.issueToken();
    const { baseUrl } = this.props;
    const socket = SocketIOClient(baseUrl);

    socket.emit("checkToken", {
      token: cookies.get("token"),
      pi_id: this.props.pi.id
    });
  }

  issueToken = () => {};

  render() {
    const { id, name, description, model, user_id } = this.props.pi;
    return (
      <div className="system-card">
        <section>{name}</section>

        <button className="display-button">{description}</button>
        <button className="display-button">Model {model}</button>
        <button className={this.isOnline()}>
          {this.state.online ? "Online" : "Offline"}
        </button>
        <button className={this.isWatering()}>
          {this.state.watering ? "Watering" : "Not Watering"}{" "}
        </button>
        <button onClick={() => copy(this.state.token)} className="token-button">
          Token: {this.state.token}
        </button>

        <h4>Uptime: 02:01 minutes</h4>
      </div>
    );
  }
}
