import axios from 'axios';

const URL = 'https://nc-news-ap-i.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${URL}/topics`);
  return data.topics;
};

export const getArticles = async queries => {
  const { data } = await axios.get(
    `${URL}/articles${queries ? `?${queries.join('&')}` : ''}`
  );
  return data.articles;
};

export const getArticlesById = async article_id => {
  const { data } = await axios.get(`${URL}/articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticleId = async id => {
  const { data } = await axios.get(`${URL}/articles/${id}/comments`);
  return data.comments;
};

export const getUser = async username => {
  const { data } = await axios.get(`${URL}/users/${username}`);
  return data;
};

export const vote = async (inc_votes, article_id, section) => {
  const { data } = await axios.patch(`${URL}/${section}/${article_id}`, {
    inc_votes
  });
  return data.article;
};

export const postComment = async (username, article_id, body) => {
  const data = await axios.post(`${URL}/articles/${article_id}/comments`, {
    body,
    username
  });
  return data;
};

export const patchCommentVote = async (comment_id, inc) => {
  const { data } = await axios.patch(`${URL}/comments/${comment_id}`, {
    inc_votes: inc
  });
  return data.comment;
};

export const deleteComment = async comment_id => {
  const data = await axios.delete(`${URL}/comments/${comment_id}`);
  return data;
};
