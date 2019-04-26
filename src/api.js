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

export const getArticlesById = async id => {
  const { data } = await axios.get(`${URL}/articles/${id}`);
  console.log(data.article, '<--- data.article');
  return data.article;
};

export const getCommentsByArticleId = async article_id => {
  const { data } = await axios.get(`${URL}/articles/${article_id}/comments`);
  console.log(data, '<--- data (comments)');
  return data;
};

export const getUser = async username => {
  const { data } = await axios.get(`${URL}/users/${username}`);
  console.log(data, '<--- data username');
  return data;
};

export const vote = async (inc_votes, id) => {
  const { data } = await axios.patch(`${URL}/articles/${id}`, { inc_votes });
  console.log(data.article, '<---- data.article for votes');
  return data.article;
};
