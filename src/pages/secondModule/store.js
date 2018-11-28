import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        albums: []
    },
    mutations: {
        updateAlbums(state, albums) {
            state.albums = albums;
        }
    },
    actions: {
        getAlbums({
            commit
        }) {
            return axios.get('https://jsonplaceholder.typicode.com/albums')
                .then(function (response) {
                    commit('updateAlbums', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
})