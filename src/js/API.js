import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_URI, // api url
  responseType: 'json',
});
