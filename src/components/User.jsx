import React, { Component } from 'react';
// import "../css/App.css";

class User extends Component {
  state = { username: '' };

  render() {
    const { username } = this.state;
    return (
      <div>
        <form className="login-form" onSubmit={this.handleLogin}>
          {this.state.username === 'jessjelly' ? (
            <div>
              <h2>Welcome {username}!</h2>
              <button onClick={this.handleLogout} id="button" type="submit">
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <button id="button" type="submit">
                Log in:
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }

  handleLogin = event => {
    event.preventDefault();
    const { username } = this.state;
    const { login } = this.props;
    login(username);
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleLogout = event => {
    event.preventDefault();
    // const { username } = this.state;
    this.setState({ username: '' });
  };
}

export default User;
