import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import ArticleCard from './components/ArticleCard';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import * as api from './api';
import '../src/css/App.css';

class App extends Component {
  state = {
    topics: [],
    user: '',
    username: {},
    loggedIn: false
  };
  render() {
    const { topics, articles, user } = this.state;
    return (
      <div className="App">
        <Header handleLogOut={this.handleLogOut} />
        <Nav topics={topics} />
        <Auth user={user} login={this.login}>
          <Router className="main">
            <Articles path="/" />
            <Articles path="/articles" />
            <Articles
              path="/topics/:topic"
              topics={topics}
              articles={articles}
            />
            <ArticleCard
              path="/articles/:article_id"
              articles={articles}
              user={user}
            />
          </Router>
        </Auth>
        <Sidebar />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
      })
    );
  };

  login = ({ user }) => {
    this.setState({ user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  handleLogOut = () => {
    this.setState({ user: '' }, () => {
      localStorage.removeItem('user');
    });
    // );
  };
}

export default App;
