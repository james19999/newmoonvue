import { ref } from 'vue'
import { defineStore } from 'pinia'
import ApiService from '@/helper/ApiService'
import baseURL from '../helper/baseurl' 
import endpoint from '../helper/endpoint'

export const useStore = defineStore('user', () => {
 
   const loginUser = async  (phone)=> {
     const data ={
      phone:ref(phone),
      }
  
     const ApiServics = new  ApiService(baseURL);
     const response =  await ApiServics.postData(endpoint.LOGIN_USER,data);
        if (response.status ===true) {
         localStorage.setItem("token",response.token)
        }
  }

  return { loginUser }
})
