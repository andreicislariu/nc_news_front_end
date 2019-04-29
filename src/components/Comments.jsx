import React, { Component } from 'react';
import Votes from './Votes';
import axios from 'axios';
import * as api from '../api';
import '../css/Comments.css';

const URL = 'https://nc-news-ap-i.herokuapp.com/api';

class Comments extends Component {
  state = {
    comments: [],
    newComment: ''
  };
  render() {
    const { comments, username } = this.props;
    const { newComment } = this.state;

    return (
      <div className="Comments">
        {comments ? (
          <div>
            {username ? (
              <form onSubmit={this.postNewComment}>
                <label>Add comment</label>
                <br />
                <textarea
                  className="textArea"
                  type="text"
                  placeholder="Add a new comment"
                  onChange={this.handleChange}
                  value={newComment}
                />
                <br />
                <button type="submit">Post</button>
              </form>
            ) : null}
            {comments.map(comment => (
              <span key={comment.comment_id}>
                {<hr />}
                {comment.body} <br />
                <p> Author: {comment.author} </p> <br />
                <p> Date: {comment.created_at.slice(0, 10)} </p> <br />
                {<hr />}
                {this.props.username === comment.author ? (
                  <form id={comment.comment_id} onSubmit={this.deleteComment}>
                    <button type="submit">Delete</button>{' '}
                  </form>
                ) : null}
                <Votes
                  id={comment.comment_id}
                  votes={comment.votes}
                  section="comments"
                  body={comment.body}
                  loggedIn={this.props.loggedIn}
                  getComments={this.getComments}
                  check={'body'}
                />
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ newComment: value });
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({
        comments
      });
    });
  };

  postNewComment = e => {
    e.preventDefault();
    const { article_id } = this.props;
    const { newComment } = this.state;
    const username = this.props.username;
    const body = { body: newComment, username };
    if (newComment) {
      axios
        .post(`${URL}/articles/${article_id}/comments`, body)
        .then(({ data }) => {
          this.setState(state => ({
            comments: [data.comment[0], ...state.comments],
            newComment: ''
          }));
        });
    }
  };

  deleteComment = () => {
    const { article_id } = this.props;
    const { comment_id } = this.state.comments[0];
    axios
      .delete(`${URL}/articles/${article_id}/comments/${comment_id}`)
      .then(() => this.handleCommentDelete(comment_id));
  };

  handleCommentDelete = comment_id => {
    const comments = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({
      comments: comments
    });
  };
}

export default Comments;
