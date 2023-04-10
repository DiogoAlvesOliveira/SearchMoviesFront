import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3003',
  headers: {'Access-Control-Allow-Origin': 'http://localhost:3000' },
  //headers: {'Content-Type' : 'application/json;charset=utf-8'},
});
