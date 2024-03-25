
import { defineStore } from 'pinia'
import ApiService from '../helper/ApiService'
import baseURL from '../helper/baseurl'
import endpoint from '../helper/endpoint'
import { useToast } from 'vue-toastification'

const toast = useToast()
let productdata = JSON.parse(localStorage.getItem('products'))

export const useProductStore = defineStore('product-store', {
  state: () => ({
    limit: [],
    products: productdata || [],
    productcard: [],
    isload: false // the
  }),
  persist:true,
  getters: {
  
  },
  actions: {
    // GET LIMIT PRODUCT
    async getLimitProduct() {
      const dataservice = new ApiService(baseURL)
      const response = await dataservice.getData(endpoint.LIMIT_PRODUCT)
      this.limit = response.data
      this.isload = true
    },
    //GET ALL PRODUCT
    async getAllProduct() {
      const dataservice = new ApiService(baseURL)
      const response = await dataservice.getData(endpoint.GET_ALL_PRODUCTS)
      console.log(response);
      this.products = response.data
      this.isload = true
    },

    //DETAIL PRODUCT
    async ShowProduct(id) {
      const dataservice = new ApiService(baseURL)
      const response = await dataservice.showData(endpoint.SHOW_PRODUCT, id)
      this.products = response.data
      this.isload = true
    },

    AddProductToCard(id, name, desc, img) {
      let found = false
      this.productcard.forEach((element) => {
        if (element.id === id) {
          found = true
          element.qty++
          toast.warning('Produit déjà ajouté au devis')
          return // Sortir de la boucle forEach dès qu'on trouve le produit
        }
      })

      if (!found) {
        this.productcard.push({ id: id, name: name, desc: desc, img: img, qty: 1 })

        toast.success('Produit ajouté au devis!')

        
        // localStorage.setItem('productcard', JSON.stringify(this.productcard))
      }
    },

    // INCREMENT
    Increment(id) {
      const productIndex = this.productcard.findIndex((x) => x.id === id)

      if (productIndex !== -1) {
        this.productcard[productIndex].qty++ // Incrémente la quantité du produit
        toast.success('Incrementé!')
        // Mettre à jour le localStorage avec le tableau mis à jour
        localStorage.setItem('productcard', JSON.stringify(this.productcard))
      } else {
        toast.error('Produit non trouvé dans le devis!')
      }
    },
    // DECREMENT
    Decrement(id) {
      const productIndex = this.productcard.findIndex((x) => x.id === id)

      if (productIndex !== -1 && this.productcard[productIndex].qty > 1) {
        this.productcard[productIndex].qty-- // Décrémente la quantité du produit
        // Mettre à jour le localStorage avec le tableau mis à jour
        localStorage.setItem('productcard', JSON.stringify(this.productcard))
        return this.productcard[productIndex].qty
      } else {
        return 1 // La quantité minimale est 1
      }
    },

    // REMOVE FROM CART
    Delete(id) {
      const index = this.productcard.findIndex((element) => element.id === id)
      if (index !== -1) {
        // Supprimer l'élément du tableau productcard
        this.productcard.splice(index, 1)
        // Mettre à jour le localStorage
        localStorage.setItem('productcard', JSON.stringify(this.productcard))
        toast.success('Produit retiré du devis!')
        console.log(this.productcard, 'remove from card')
      } else {
        toast.error('Produit non trouvé dans le devis!')
      }
    },

    // SAVE CART
    async SaveCart(name, lastname, phone, email, datas) {
      datas = this.productcard.map(function (element) {
        return {
          product_id: element.id,
          price: 0,
          quantity: element.qty
        }
      })
      const data = {
        name: name,
        phone: phone,
        email: email,
        lastname: lastname,
        order_items: datas
      }
      const dataservice = new ApiService(baseURL)
      const response = await dataservice.postData(endpoint.SAVE_CART, data)
      this.productcard = [];
      return response
    }
  }

  //ADD PRODUCT TO CARD
})
