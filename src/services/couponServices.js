import axios from 'axios';
import router from '../router';

class AuthService {
  async getAllCoupon() {
    try {
      const response = await axios.get('coupon');
      return Promise.resolve(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return Promise.reject('Coupon already redeemed');
      } else {
        return Promise.reject('An error occurred while trying to log in');
      }
    }
  }


  async createCoupon(code,category,couponName,discount,place,expirationDate,creationDate,redeemable) {
    return axios.post('coupon', {code,category,couponName,discount,place,expirationDate,creationDate,redeemable})
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          return Promise.resolve(res.data);
        } else if (res.status === 400) {
          return Promise.reject(error);
        }
      })
      // error handling
      .catch((error) => {
        console.log("this is error:", error);
        return Promise.reject(error);
      });
  }

  async redeemCoupon(id){
    return axios.patch(`coupon/${id}`)
    .then((res)=>{
      return Promise.resolve(res.data)
    })
    .catch((err)=>{
      return Promise.reject(err)
    })
  }

}

export default new AuthService();