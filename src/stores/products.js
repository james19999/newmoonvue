import { ref } from 'vue'
import { defineStore } from 'pinia'
import ApiService from '../helper/ApiService'
import baseURL from '../helper/baseurl'
import endpoint from '../helper/endpoint'
import { useToast } from 'vue-toastification'

const toast = useToast()
export const useProductStore = defineStore('products', () => {
  const limit = ref([])
  const isload = ref(false)
  const products = ref([])

  const productcard = ref([])

  // GET LIMIT PRODUCT
  const getLimitProduct = async () => {
    const dataservice = new ApiService(baseURL)
    const response = await dataservice.getData(endpoint.LIMIT_PRODUCT)
    limit.value = response.data
    isload.value = true
  }
  //GET ALL PRODUCT
  const getAllProduct = async () => {
    const dataservice = new ApiService(baseURL)
    const response = await dataservice.getData(endpoint.GET_ALL_PRODUCTS)
    products.value = response.data
    isload.value = true
  }

  //DETAIL PRODUCT
  const ShowProduct = async (id) => {
    const dataservice = new ApiService(baseURL)
    const response = await dataservice.showData(endpoint.SHOW_PRODUCT, id)
    products.value = response.data
    isload.value = true
  }

  //ADD PRODUCT TO CARD

  function AddProductToCard(id, name, desc, img) {
    let found = false

    productcard.value.forEach((element) => {
      if (element.id === id) {
        found = true
        element.qty++
        toast.warning('Produit déjà ajouté au devis')
        return // Sortir de la boucle forEach dès qu'on trouve le produit
      }
    })

    if (!found) {
      productcard.value.push({ id: id, name: name, desc: desc, img: img, qty: 1 })

      toast.success('Produit ajouté au devis!')

      console.log(productcard.value, 'add to card')
    }
  }

  // INCREMENT
  function Increment(id) {
    const val = productcard.value.find((x) => x.id === id)
    toast.success('incremented!')
    return val.qty++
  }
  // DECREMENT
  function Decrement(id) {
    const val = productcard.value.find((x) => x.id == id)
    if (val.qty > 1) {
      return --val.qty
    }
  }

  // REMOVE FROM CART
  function Delete(id) {
    const val = productcard.value.filter((x) => x.id !== id)
    productcard.value = val
  }

  // SAVE CART
  const SaveCart = async (name, lastname, phone, email, datas) => {
    datas = productcard.value.map(function (element) {
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
    return response
  }

  return {
    getLimitProduct,
    limit,
    isload,
    getAllProduct,
    products,
    AddProductToCard,
    productcard,
    Increment,
    Decrement,
    Delete,
    ShowProduct,
    SaveCart
  }
})
