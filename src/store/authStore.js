//imports
import { defineStore } from "pinia";
import router from '../router/index';
import AuthService from '../services/authService'

//store
export const useAuthStore = defineStore("auth", {
  state: () => ({
    refreshToken: JSON.parse(localStorage.getItem('refresh_token')) || null,
    accessToken: JSON.parse(localStorage.getItem('access_token')) || null,
  }),

  
  getters: {
    is_auth: (state) => !!state.authUser,
  },


  actions: {
    async login(username,password) {
      return AuthService.login(username,password)
        .then((res) => {
          this.accessToken = res.accessToken
          this.refreshToken = res.refreshToken
          localStorage.setItem('access_token', JSON.stringify(res.accessToken))
          localStorage.setItem('refresh_token', JSON.stringify(res.refreshToken))
          // router.push('/')
        })
        .catch(error => {
          // if any error occurs
         console.log(error)
        })
    },

    // to register user

    async register(data) {
      try {
        const response = await AuthService.register(data);
        if(response.msg){
          router.push('/login')
        }
      } catch (error) {
        console.log(error)
      }
    },

  }
})