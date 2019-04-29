import React, { Component } from 'react';

import axios from 'axios';
import '../css/Auth.css';
class Auth extends Component {
  state = {
    username: '',
    value: '',
    input: '',
    noInput: false,
    hasError: false
  };

  render() {
    const { user, children } = this.props;
    return (
      <div className="main-auth">
        {user ? (
          children
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h1>Comments</h1>
            <h3>Log in to comment on article.</h3>
            <label>
              <h3>Username:</h3>
            </label>
            <hr />
            <input
              type="text"
              placeholder="grumpy19"
              value={this.state.input}
              onChange={this.handleChange}
              id="username"
              required
            />
            <br />
            <button className="loginLogout" type="submit">
              Login
            </button>
          </form>
        )}
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;

    if (input.length < 1) {
      this.setState({ noInput: true, hasError: false });
    } else {
      axios
        .get(`https://nc-news-ap-i.herokuapp.com/api/users/${input}`)
        .then(({ data }) => {
          this.props.login(data);
        })
        .then(() => {
          this.setState({ input: '', hasError: false, noInput: false });
        })
        .catch(err => {
          this.setState({ hasError: true, noInput: false });
        });
    }
  };
}

export default Auth;
