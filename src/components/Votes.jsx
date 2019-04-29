import React, { Component } from 'react';
import * as api from '../api';

class Votes extends Component {
  state = {
    changeVote: 0
  };
  render() {
    const { changeVote } = this.state;
    const { votes } = this.props;

    return (
      <div>
        <button
          className="voteArrowButton"
          onClick={() => this.vote(1)}
          disabled={changeVote === 1}
        >
          {' '}
          <span
            className="spanArrow"
            role="img"
            aria-label="Up-Arrow"
            aria-labelledby="uparrow1"
          >
            ⬆️
          </span>
        </button>
        <p>Votes: {votes + changeVote}</p>
        <button
          className="voteArrowButton"
          onClick={() => this.vote(-1)}
          disabled={changeVote === -1}
        >
          <span
            className="spanArrow"
            role="img"
            aria-label="Down-Arrow"
            aria-labelledby="downarrow1"
          >
            ⬇️
          </span>
        </button>
      </div>
    );
  }

  vote = inc_votes => {
    const { id, section } = this.props;
    api.vote(inc_votes, id, section).catch(err => {
      this.setState(state => ({
        changeVote: state.changeVote - inc_votes
      }));
    });
    this.setState(state => ({
      changeVote: state.changeVote + inc_votes
    }));
  };
}

export default Votes;
