import { createStore } from 'vuex'
import axios from 'axios'
const apiURL = 'https://le-luxe-node-project.onrender.com/'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'

axios.defaults.withCredentials = true
/* eslint-disable*/
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
    },
    addUser(state, payload){
      state.users.push(payload)
    },
    addProduct(state, payload){
      state.products.push(payload)
    },
    deleteUser(state, userId){
      state.users = state.users.filter(user => user.id !== userId)
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}products`)
        console.log(data);
        commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addToCart({ commit }, product) {
      try {
        const { data } = await axios.post(`${apiURL}cart`, product)
        console.log(data);
        if(data){
          toast(`${product.prodName} Has Been Added To Cart`, {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }  
      } catch (error) {
        console.log(error)
      }
    },
    async addProduct({ commit }, product) {
      try {
        const { data } = await axios.post(`${apiURL}products`, product)
        if (data.message){
          toast("Product Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updateProduct({ commit }, product) {
      try {
        const { data } = await axios.patch(`${apiURL}products/${product.id}`, product)
        if (data.message){
          toast("Product Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        console.log(data);
        commit('setUsers', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addUser({ commit }, info) {
      try {
        const { data } = await axios.post(`${apiURL}users`, info)
        if(data){
          toast("New User Has Been Added", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
          commit('addUser', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        await axios.delete(`${apiURL}users/${userId}`)
        commit('deleteUser', userId)
        toast("User Deleted Successfully", {
          theme: "dark",
          type: "default",
          position: "top-center",
          dangerouslyHTMLString: true
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser({ commit }, user) {
      try {
        const { data } = await axios.patch(`${apiURL}users/${user.userID}`, user)
        if (data.message) {
          toast("User Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  }
})