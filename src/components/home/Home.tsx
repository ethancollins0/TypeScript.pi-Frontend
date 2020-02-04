import React, { Component } from "react";

export default class Home extends Component<{ baseUrl: string }> {
  componentDidMount() {
    alert("hey");
  }

  render() {
    return (
      <div className="home">
        <h1>Hiya</h1>
      </div>
    );
  }
}
