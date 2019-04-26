import React, { Component } from 'react';
// import { Link } from '@reach/router';
import * as api from '../api';

class ArticleCard extends Component {
  state = {
    article: {},
    comments: [],
    vote_inc: 1
  };

  render() {
    const {
      // article_id,
      title,
      author,
      comment_count,
      body,
      votes
    } = this.state.article;
    console.log(this.state, '<--- the state');
    return (
      <div className="articleCard">
        <h3 className="articleTitle">{title}</h3>
        <div className="article">
          <p>By: {author}</p>
          <p>{body}</p>
          {<br />}
          <p>{`Comments: ${comment_count}, Votes: ${votes}`}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticlesById(this.props.article_id).then(article => {
      this.setState({
        article
      });
    });
  };
}

export default ArticleCard;
