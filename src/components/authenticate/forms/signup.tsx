import React, { Component } from "react";

export default class Signup extends Component<{ changeForm: Function }> {
  state = {
    email: "",
    name: "",
    password: "",
    password_confirmation: ""
  };

  handleChangeForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.changeForm();
  };

  handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input type="text" name="email" value={this.state.email} />
        <input type="text" name="name" value={this.state.name} />
        <input type="password" name="password" value={this.state.password} />
        <input
          type="password"
          name="password_confirmation"
          value={this.state.password_confirmation}
        />
        <div className="buttons">
          <button onClick={this.handleChangeForm}>Login</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}
