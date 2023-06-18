import axios from 'axios';
// const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
// axios.defaults.baseURL = 'https://coupoun-backend.up.railway.app/';
axios.defaults.baseURL = 'http://localhost:8000/';
// 
export default axios;