import { createStore } from 'vuex'
import axios from 'axios'
const apiURL = 'https://le-luxe-node-project.onrender.com/'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


axios.defaults.withCredentials = true //
// axios.defaults.headers = $cookies.get('token')

/* eslint-disable */
export default createStore({
  state: {
    users: [],
    products: []
  },
  getters: {
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },
    setUsers(state, payload){
      state.users = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      let  data  =  (await axios.get(`${apiURL}products`)).data
      console.log(data);
      commit('setProducts', data)
    },
   async getUsers({ commit }) {
      let data =( await axios.get(`${apiURL}users`)).data
      console.log(data);
      
      commit('setUsers', data)
    //     .catch(error){
    //     console.log(error)
    // }
  },
    async addToCart(){
      let {data} =  await axios.post(`${apiURL}products`)
      console.log(data);
      if(data){
        toast("{{product.prodName}} Has Been Added To Cart", )
      }  
    },
    async addProduct(){
      let data = (await axios.post(`${apiURL}products`)).data
      if (data.message){
        toast("Product Added Successfully", {
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
    },
    async updateProduct(){
      let data = (await axios.patch(`${apiURL}products`)).data
      if (data.message){
        toast("Product Updated Successfully", {
          "theme": "dark",
          "type": "default",
      })
    }},
  
    
    // async getProducts({commit}){
    //   let data = await axios.get(`${apiURL}products`)
    //   console.log('setProducts',data);
    // },
    // async getUsers({commit}){
    //   let {data} = await axios.get(`${apiURL}users`)
    //   commit('', data.results)
    // },
     async addUser({commit},info){
      let data = (await axios.post(`${apiURL}users`,info))
      if(data){
        toast("New User Has Been Added", )
      }
    },
    },
    modules: {
  }
  })
