import { createStore } from 'vuex'
import axios from 'axios'
const url = "https://bmxworld.onrender.com/";

export default createStore({
  state: {
    bikes: [],
    isLoading: false
  },
  getters: {
  },
  mutations: {
    setLoading(state, isLoading){
      state.isLoading = isLoading
    },
    setBikes(state, updatedBike){
      state.bikes = updatedBike
    },
    updateBike(state, updatedBike){
      const exisitingProdID = state.bikes.findIndex((bike) => bike.bmxID === updatedBike.bmxID)
      if(exisitingProdID !== 1){
        state.bikes[exisitingProdID] = updatedBike
      }
    },
    setDelete(state, data){
      state.bikes = data
    }
  },
  actions: {
    async fetchBikes({commit}){
      commit('setLoading', true)
      const {data} = await axios.get(`${url}products`)
      commit("setBikes", data.results);
      // commit('setLoading', false)
    },

    async updateBike({commit}, {bmxID, ...updatedFields}){
      try {
        const updatedBike = {bmxID, ...updatedFields}
        const {data} = await axios.patch(`${url}product/${updatedBike.bmxID}`, updatedBike)
        commit('setBikes', data.result)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },

    async deleteProd({commit}, bmxID){
      try {
        const { data } = await axios.delete(`${url}product/${bmxID}`)
        commit('setDelete', data)
        location.reload()
      } catch (error) {
        
      }
    }
  },
  modules: {
  }
})
