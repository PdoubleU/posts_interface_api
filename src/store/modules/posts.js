/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import axios from 'axios'
import unifyStoredData from '../../helpers/unifyStoredData'
import { sortConditionValues } from '../../const/sortConditionValues'
import { sortNameDsc, sortNameAsc, sortTitleDsc, sortTitleAsc } from '../../helpers/sortingMethods'
import { searchPost } from '../../helpers/searchMethods'

const { byNameDsc, byNameAsc, byTitleDsc, byTitleAsc } = sortConditionValues

const posts_uri = 'https://jsonplaceholder.typicode.com/posts/'
const users_uri = 'https://jsonplaceholder.typicode.com/users/'

const state = {
  posts: [],
  filtered: [],
  isSearchActive: false
}

const getters = {
  allPosts: state => !state.isSearchActive ? state.posts : state.filtered
}

const actions = {
  async fetchData ({ commit }) {
    const fetchedPosts = await axios.get(posts_uri)
    const fetchedUsers = await axios.get(users_uri)
    commit('unifyData', [fetchedPosts.data, fetchedUsers.data])
    console.log(state.posts)
  },
  async removePost ({ commit }, post) {
    const response = await axios.delete(`${posts_uri}$
{post}`)
    console.warn('Warning: This is mockup delete request. Server is set to return status 200, regardles of provided \'post\' parameter. Be aware that changing API may cause problems. Response status: ', response.status)
    commit('deletePost', post)
  },
  sortPosts ({ commit }, condition) {
    commit('sortPosts', condition)
  },
  searchPosts ({ commit }, input) {
    commit('searchPosts', input)
  }

}

const mutations = {
  unifyData: (state, [posts, users]) => {
    return state.posts = unifyStoredData(posts, users)
  },
  deletePost: (state, post) => state.posts = state.posts.filter(item => post !== item.id),
  sortPosts: (state, condition) => {
    switch (condition) {
      case byNameDsc:
        state.posts = state.posts.sort((a, b) => sortNameDsc(a, b))
        break
      case byNameAsc:
        state.posts = state.posts.sort((a, b) => sortNameAsc(a, b))
        break
      case byTitleDsc:
        state.posts = state.posts.sort((a, b) => sortTitleDsc(a, b))
        break
      case byTitleAsc:
        state.posts = state.posts.sort((a, b) => sortTitleAsc(a, b))
        break
      default:
        console.log('No sorting method was executed. Check the parameters of switch statement.')
        break
    }
  },
  searchPosts: (state, input) => {
    !input.length ? state.isSearchActive = false : state.isSearchActive = true
    state.filtered = state.posts.filter(elem => searchPost(elem, input))
  }
}

export default { state, getters, actions, mutations }
