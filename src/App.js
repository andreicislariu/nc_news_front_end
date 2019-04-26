import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';

import Articles from './components/Articles';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import * as api from './api';
import '../src/css/App.css';
// import Spinner from 'react-spinner-material';

class App extends Component {
  state = {
    topics: []
    // isLoading: true
  };
  render() {
    const { topics, articles } = this.state;
    // if (this.state.isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
        <Header />
        {/* <Spinner /> */}
        <Nav topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/topics/:topic" topics={topics} articles={articles} />
          <ArticleCard path="/articles/:article_id" articles={articles} />
        </Router>
        <Sidebar />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
        // isLoading: false
      })
    );
  };
}

export default App;
