// import Vue from 'vue'
// import Vuex from 'vuex'
import { request } from '../network/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostName: 'https://lightliang.top/'
    // hostName: 'http://120.77.212.149/'
    // hostName: 'http://192.168.0.7:8000/'
  },
  mutations: {
  },
  actions: {
    getNormalData(context, configObj) {
      return request(configObj)
    },
    setNormalData(context, configObj) {
      return request(configObj)
    }
  },
  modules: {
  }
})
