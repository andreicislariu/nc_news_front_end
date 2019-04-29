import React, { Component } from 'react';
import Comments from './Comments';
import * as api from '../api';
import Votes from './Votes';
import axios from 'axios';

class ArticleCard extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const {
      article_id,
      title,
      author,
      comment_count,
      body,
      votes
    } = this.state.article;

    const { comments } = this.state;
    const { user } = this.props;
    let username = user[0].username;

    return (
      <div className="articleCard">
        <h3 className="articleTitle">{title}</h3>
        <div className="article">
          <p>By: {author}</p>
          {<hr />}
          <p>{body}</p>
          <Votes votes={votes} id={article_id} section="articles" />
          {<hr />}
          <p>{`Comments: ${comment_count}, Votes: ${votes}`}</p>
          <Comments
            article_id={article_id}
            comments={comments}
            username={username}
            handleCommentDelete={this.handleCommentDelete}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
    this.fetchComment();
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticlesById(article_id).then(article => this.setState({ article }));
    // .catch(err => {
    //   navigate('/error', { replace: true });
    // });
  };

  fetchComment = () => {
    const { article_id } = this.props;
    axios
      .get(
        `https://nc-news-ap-i.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        this.setState({
          comments: data.comments
        });
      });
  };
}

export default ArticleCard;
