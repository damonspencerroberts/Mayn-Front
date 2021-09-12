import axios from 'axios';

const apiPost = (endpoint = '/', body = {}, moreHeaders = {}) => {
  const headers = {
    'accept': '*/*',
    'Content-Type': 'application/json',
    ...moreHeaders,
  };
  console.log(headers);

  return axios.post(`https://bk-mayn.herokuapp.com/api${endpoint}`, body, { headers });
};

export default apiPost;
