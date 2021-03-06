import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    getPosts({
      commit
    }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          commit('updatePosts', response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
})