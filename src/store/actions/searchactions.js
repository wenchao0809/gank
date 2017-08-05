import axios from 'axios'

export const searchactions = {
  /**
   * 获取随机数据用于初始化页面
   * @param commit
   * @returns {Promise.<void>}
   */
  async  getRandomGan ({commit}) {
    commit('UPDATE_IS_SHOW_REFRESH', true)
    let path = `/history/content/20/${this.state.loadPage}`
    try {
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_REFRESH', response.data)
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
  async searchGanRefresh ({commit}, queryString) {
    let path = `/query/listview/category/${queryString}/count/21/page/${this.state.refreshPage}`
    try {
      commit('UPDATE_IS_SHOW_REFRESH', true)
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_REFRESH', response.data)
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
  async searchGanLoad ({commit}, queryString) {
    let path = `/query/listview/category/${queryString}/count/21/page/${this.state.loadPage}`
    commit('UPDATE_IS_SHOW_REFRESH', true)
    try {
      let response = await axios.get(path)
      commit('UPDATE_SEARCH_RESULTS_LOAD', response.data)
      commit('UPDATE_IS_SHOW_REFRESH', false)
    } catch (e) {
      console.log(e.message)
    }
  }
}
