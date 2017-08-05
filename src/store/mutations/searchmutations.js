import * as types from '../constants/types'

export const searchmutations = {
  [types.UPDATE_SEARCH_RESULTS_REFRESH] (state, searchResults) {
    if (searchResults.length > 20) {
      state.moreData = true
    } else {
      state.moreData = false
    }
    searchResults.pop()
    state.searchResults = searchResults
    /**
     * 刷新请求页
     * @type {number}
     */
    state.refreshPage = 1
    state.loadPage = 2
  },
  [types.UPDATE_SEARCH_RESULTS_LOAD] (state, searchResults) {
    if (searchResults.length > 20) {
      state.moreData = true
    } else {
      false
    }
    searchResults.pop()
    state.searchResults = [state.searchResults, ...searchResults]
    state.loadPage++
  }
}
