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
  console.log(data.articles);
  return data.articles;
};

export const getArticlesById = async id => {
  const { data } = await axios.get(`${URL}/articles/${id}`);
  console.log(data.article);
  return data.article;
};

export const getCommentsByArticleId = async article_id => {
  const { data } = await axios.get(`${URL}/articles/${article_id}/comments`);
  console.log(data);
  return data;
};
