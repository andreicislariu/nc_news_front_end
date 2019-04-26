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
// import Spinner from 'react-spinner-material';

class App extends Component {
  state = {
    topics: [],
    user: null,
    loginFailed: false
    // isLoading: true
  };
  render() {
    const { topics, articles, user } = this.state;
    // if (this.state.isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
        <Header />
        {/* <Spinner /> */}
        <Nav topics={topics} />
        <Auth user={user} login={this.login}>
          <Router className="main">
            <Articles path="/" />
            <Articles
              path="/topics/:topic"
              topics={topics}
              articles={articles}
            />
            <ArticleCard path="/articles/:article_id" articles={articles} />
          </Router>
        </Auth>
        <Sidebar />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
    // this.setState({ isLoading: false });
  }

  fetchTopics = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
        // isLoading: false
      })
    );
  };

  login = username => {
    api
      .getUser(username)
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(err => {
        this.setState({
          loginFailed: true
        });
      });
  };
}

export default App;
