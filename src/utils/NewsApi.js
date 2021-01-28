import { dateNow, dateWeekAgo } from './Utils';

const NEWS_URL = `https://nomoreparties.co/news/v2/everything?from=${dateWeekAgo()}&to=${dateNow()}&pageSize=100&language=ru&apiKey=35255e2f58e240ecbaa704ae2f02f23f`;

export const getNews = (keyword) => {
  return fetch(`${NEWS_URL}&q=${keyword}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).then((res) => {
    return res.articles; 
  })
}