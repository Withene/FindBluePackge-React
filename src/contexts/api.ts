import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.228.5.83:8000',
});

export default api;
