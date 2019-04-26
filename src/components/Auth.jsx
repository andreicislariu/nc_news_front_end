import React, { Component } from 'react';

class Auth extends Component {
  state = {
    username: ''
  };
  render() {
    const { username } = this.state;
    const { user, children } = this.props;
    return (
      <div>
        {user ? (
          children
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h1>Comments</h1>
            <h3>Log in to comment on article.</h3>
            <label>
              <h3>Username:</h3>
            </label>
            <input
              placeholder="grumpy19"
              value={username}
              onChange={this.handleChange}
              id="username"
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };
}

export default Auth;
