import Vue from 'vue'
import Vuex from 'vuex'
import categorysJson from '../data/categorys.json'
import videosJson from '../data/videos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: videosJson,
    categorys: categorysJson,
  },
  getters: {
    videos: state => state.videos,
    categorys: state => state.categorys,
    getcategoryById: (state) => (id) => {
      return state.categorys.find(category => category.id === id)
    }
  },
  modules: {},
})
