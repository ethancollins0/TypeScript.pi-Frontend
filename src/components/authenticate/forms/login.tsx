import React, { Component } from "react";

export default class Login extends Component<{
  changeForm: Function;
  attemptLogin: Function;
}> {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.attemptLogin(this.state);
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleChangeForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.changeForm();
  };

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="enter email"
          required
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="enter password"
          required
        />
        <div className="buttons">
          <button type="button" onClick={this.handleChangeForm}>
            Signup
          </button>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
