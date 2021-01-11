import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_URI, // урл апи, создайте .env и пересоберите фронт (npm run build)
  responseType: 'json',
});

// пример .env
//  BASE_URI=http://192.168.0.18:4000/
