/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import axios from 'axios'
import unifyStoredData from '../../helpers/unifyStoredData'

const posts_uri = 'https://jsonplaceholder.typicode.com/posts/'
const users_uri = 'https://jsonplaceholder.typicode.com/users/'

const state = {
  posts: [],
  authors: []
}

const getters = {
  allPosts: state => unifyStoredData(state.posts, state.authors)
}

const actions = {
  async fetchPosts ({ commit }) {
    const response = await axios.get(posts_uri)
    commit('setPosts', response.data)
  },
  async fetchAuthors ({ commit }) {
    const response = await axios.get(users_uri)
    commit('setAuthors', response.data)
  },
  async removePost ({ commit }, post) {
    const response = await axios.delete(`${posts_uri}$
{post}`)
    console.warn('Warning: This is mockup delete request. Server is set to return status 200, regardles of provided \'post\' parameter. Be aware that changing API may cause problems. Response status: ', response.status)
    commit('deletePost', post)
  }
}

const mutations = {
  setPosts: (state, posts) => state.posts = posts,
  setAuthors: (state, authors) => state.authors = authors,
  deletePost: (state, post) => state.posts = state.posts.filter(item => post !== item.id)
}

export default { state, getters, actions, mutations }
