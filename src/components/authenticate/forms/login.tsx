import React, { Component } from "react";

export default class Login extends Component<{ changeForm: Function }> {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleChangeForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.changeForm();
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
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
          <button onClick={this.handleChangeForm}>Signup</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}
