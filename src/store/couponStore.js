//imports
import { defineStore } from "pinia";
import router from '../router/index';
import couponServices from "../services/couponServices";
//store
export const useCouponStore = defineStore("coupon", {
  state: () => ({
      coupon:[] || null,
      redeemError:false
  }),

  actions: {
    // get all coupon
    async getAllCoupon(){
      return couponServices.getAllCoupon()
      .then((res)=>{
        this.coupon = res
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    // create coupon
    async createCoupon(code,category,couponName,discount,place,expirationDate,creationDate,redeemable){
      return couponServices.createCoupon(code,category,couponName,discount,place,expirationDate,creationDate,redeemable)
      .then(res=>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    // redeem coupon
    async redeemCoupon(id){
      return couponServices.redeemCoupon(id)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        if(err.response.data.error){
          this.redeemError = true
        }
        console.log(err?.response?.data.error)
      })
    }


  }
})