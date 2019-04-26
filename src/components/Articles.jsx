// asta e display article
import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import '../css/Articles.css';

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    const { topic, topics } = this.props;
    if (topic) {
      return (
        <div className="article-container box-wrap">
          <h2>
            Articles on: {topic.charAt(0).toUpperCase() + topic.slice(1)}
            <hr className="lineBreak" />{' '}
          </h2>
          {topics.map(topic =>
            topic === topic.slug ? (
              <div className="articleTitle">
                <p className="article" key={topic.slug}>
                  {topic.description}
                </p>
              </div>
            ) : null
          )}
          {articles.map(article =>
            article.topic === topic ? (
              <div className="article-card box" key={article.article_id}>
                <Link
                  className="article"
                  to={`/articles/${article.article_id}`}
                >
                  <h3 className="article-card box" key={article.article_id}>
                    {article.title}
                  </h3>
                  <p>By: {article.author}</p>
                </Link>
              </div>
            ) : null
          )}
        </div>
      );
    } else {
      return (
        <div className="article-container box-wrap">
          <h2>All Articles</h2>
          {articles.map(({ title, article_id, author }) => {
            return (
              <div className="article-card box" key={article_id}>
                {/* <div className="articleTitle"> */}
                <Link to={`/articles/${article_id}`} className="article">
                  <h3 className="article-card box" key={article_id}>
                    {title}
                  </h3>
                  <p>By: {author}</p>
                </Link>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      );
    }
  }

  componentDidMount = async () => {
    await this.fetchArticles();
  };

  fetchArticles = async () => {
    await api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
