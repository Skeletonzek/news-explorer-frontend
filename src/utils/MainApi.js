export const BASE_URL = 'https://api.ilyazhulanov.students.nomoredomains.rocks';

let status = 200;

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((res) => {
      res.status = status;
      return res;
    })
}

export const getSavedNews = () => {
  return fetch(`${BASE_URL}/articles`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((res) => {
      res.status = status;
      return res;
    })
}

export const postSavedNews = (data, keyword) => {

  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      keyword: keyword,
      title: data.title,
      text: data.text,
      date: data.date,
      source: data.source,
      link: data.link,
      image: data.img
    })
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((res) => {
      res.status = status;
      return res;
    })
}

export const deleteSavedNews = (article) => {

  return fetch(`${BASE_URL}/articles/${article._id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((res) => {
      res.status = status;
      return res;
    })
}