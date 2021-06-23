import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/eCommerceTech/resources/',
});

export default api;
