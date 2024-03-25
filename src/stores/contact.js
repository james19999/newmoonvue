import { ref } from 'vue'
import { defineStore } from 'pinia'
import ApiService from '../helper/ApiService'
import baseURL from '../helper/baseurl'
import endpoint from '../helper/endpoint'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useContactStore = defineStore('contact', () => {
 const contacts=ref({
        name:"",
        email:"",
        msg:""
      });
  const Contactsave = async (contact)=>{
      const data={
        name:contact.name,
        email:contact.email,
        msg:contact.msg,
       };
    const dataservice = new ApiService(baseURL)
    const response = await dataservice.postData(endpoint.CONTACT,data)
     if(response.status==true){
      toast.success(`${response.message}`);
      contacts.value.name="";
      contacts.value.email="";
      contacts.value.msg=""
     }else{
        toast.error("veuillez remplir tout les  champs");
     }
  }
  return {
    Contactsave,
    contacts,
   }
})
