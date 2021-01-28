export const BASE_URL = 'https://api.ilyazhulanov.students.nomoredomains.rocks';


let status = 200;

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
    .then((response) => {
      status = response.status;
      return response.json()
    })
    .then((res) => {
      res.status = status;
      return res;
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((response) => {
      status = response.status;
      return response.json()
    })
    .then((res) => {
      res.status = status;
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        return res;
      }
      return res;
    })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((response) => {
      status = response.status;
      return response.json()
    })
    .then((res) => {
      res.status = status;
      return res;
    })
};