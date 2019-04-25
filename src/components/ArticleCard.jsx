import React, { Component } from 'react';
// import { Link } from '@reach/router';
import * as api from '../api';

class ArticleCard extends Component {
  state = {
    article: {}
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
