import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    topics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life'
      },
      {
        slug: 'football',
        description: 'FOOTIE!'
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?'
      }
    ]
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav topics={topics} />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
