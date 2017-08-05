import {searchactions} from '../actions/searchactions'
import {searchmutations} from '../mutations/searchmutations'

const search = {
  state: {
    searchResults: [],
    refreshPage: 1,
    loadPage: 2,
    moreData: false
  },
  actions: searchactions,
  mutations: searchmutations
}

export default search
