import React, { Component } from "react";

export default class Signup extends Component<{
  changeForm: Function;
  attemptSignup: Function;
}> {
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

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    if (this.state.password != this.state.password_confirmation) {
      alert("passwords must match");
      return;
    }
    this.props.attemptSignup(this.state);
  };

  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Enter email"
          type="email"
          name="email"
          value={this.state.email}
          required
        />
        <input
          onChange={this.handleChange}
          placeholder="Enter name"
          type="text"
          name="name"
          value={this.state.name}
          required
        />
        <input
          onChange={this.handleChange}
          placeholder="Enter password"
          type="password"
          name="password"
          value={this.state.password}
          required
        />
        <input
          onChange={this.handleChange}
          placeholder="Enter password confirmation"
          type="password"
          name="password_confirmation"
          value={this.state.password_confirmation}
          required
        />
        <div className="buttons">
          <button type="button" onClick={this.handleChangeForm}>
            Login
          </button>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
