import axios from 'axios';
// const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
 axios.defaults.baseURL = 'https://coupon-backend.onrender.com/';
//axios.defaults.baseURL = 'http://localhost:8000/';
// 
export default axios;
