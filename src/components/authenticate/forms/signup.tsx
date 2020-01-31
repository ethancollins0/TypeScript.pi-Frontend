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

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
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
        <input
          onChange={this.handleChange}
          type="text"
          name="email"
          value={this.state.email}
          required
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          required
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.password}
          required
        />
        <input
          onChange={this.handleChange}
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
