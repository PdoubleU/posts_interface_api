/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import axios from 'axios'

const posts_uri = 'https://jsonplaceholder.typicode.com/posts/'
// const users_uri = 'https://jsonplaceholder.typicode.com/users/'
const state = {
  posts: []
}

const getters = {
  allPosts: state => state.posts
}

const actions = {
  async fetchPosts ({ commit }) {
    const response = await axios.get(posts_uri)
    console.log(response.data)
    commit('setPosts', response.data)
  },
  async removePost ({ commit }, post) {
    const response = await axios.delete(`${posts_uri}$
{post}`)
    console.log(response)
    commit('deletePost', post)
  }
}

const mutations = {
  setPosts: (state, posts) => state.posts = posts,
  deletePost: (state, post) => state.posts = state.posts.filter(item => post.id !== item.id)
}

export default { state, getters, actions, mutations }
