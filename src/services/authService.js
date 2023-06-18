import axios from 'axios';
import router from '../router';

class AuthService {
  // login service
  async login(username,password) {
    try {
      const response = await axios.post('api/admin/login', { username,password });
      return Promise.resolve(response.data);
    } 
    // error handling
    catch (error) {
      if (error.response && error.response.status === 400) {
        return Promise.reject('Invalid username or password');
      } else {
        return Promise.reject('An error occurred while trying to log in');
      }
    }
  }
// register service
  async register(data) {
    return axios.post('api/admin/register', {
      username: data.username,
      email: data.email,
      password: data.password,
      name:data.name
    })
      .then(res => {
          return Promise.resolve(res.data);
      })
      // error handling
      .catch((error) => {
        console.log("this is error")
        return Promise.resolve(error)
      })
  }
}

export default new AuthService();