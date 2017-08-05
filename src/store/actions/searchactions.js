import axios from 'axios'

export const searchactions = {
  /**
   * 获取随机数据用于初始化页面
   * @param commit
   * @returns {Promise.<void>}
   */
  async  getRandomGan ({state, commit}) {
    let path = `/random/data/Android/20`
    try {
      commit('UPDATE_IS_SHOW_REFRESH', true)
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_REFRESH', response.data.results)
      commit('UPDATE_IS_SHOW_REFRESH', false)
    } catch (e) {
      console.log(e.message)
    }
  },
  /**
   * 获取搜索数据
   * @param commit
   * @param queryString
   * @returns {Promise.<void>}
   */
  async searchGanRefresh ({state, commit}, queryString) {
    let path = `/search/query/${queryString}/category/all/count/21/page/${state.refreshPage}`
    try {
      commit('UPDATE_IS_SHOW_REFRESH', true)
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_REFRESH', response.data.results)
      commit('UPDATE_IS_SHOW_REFRESH', false)
    } catch (e) {
      console.log(e.message)
    }
  },
  /**
   * 下拉加载数据
   * @param commit
   * @param queryString
   * @returns {Promise.<void>}
   */
  async searchGanLoad ({state, commit}, queryString) {
    let path = `/search/query/${queryString}/category/all/count/21/page/${state.loadPage}`
    try {
      commit('UPDATE_IS_SHOW_LOAD', true)
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_LOAD', response.data.results)
      commit('UPDATE_IS_SHOW_LOAD', false)
    } catch (e) {
      console.log(e.message)
    }
  }
}
