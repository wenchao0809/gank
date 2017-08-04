import axios from 'axios'

export const classifyActions = {
  /**
  * 通过分类获取干货 下拉刷新
  * @param dispatch
  * @param commit
  * @returns {Promise.<void>}
  */
  async getGanhuoByClassifyRefresh ({state, commit}) {
    let path = `http://gank.io/api/data/${state.classifySelectClassifyString}/21/${state.refreshPage}`
    try {
      commit('UPDATE_IS_SHOW_REFRESH', true)
      let response = await axios.get(path)
      commit('UPDATE_SELECT_CLASSIFY_DATA', response.data.results)
      commit('UPDATE_IS_SHOW_REFRESH', false)
    } catch (e) {
      console.log(e.message)
    }
  },
  /**
   * 上拉加载方法
   * @param dispatch
   * @param commit
   * @returns {Promise.<void>}
   */
  async getGanhuoByClassifyLoad ({state, commit}) {
    let path = `http://gank.io/api/data/${state.classifySelectClassifyString}/21/${state.loadPage}`
    try {
      commit('UPDATE_IS_SHOW_LOAD', true)
      let response = await axios.get(path)
      commit('UPDATE_SELECT_CLASSIFY__LOAD', response.data.results)
      commit('UPDATE_IS_SHOW_LOAD', false)
    } catch (e) {
      console.log(e.message)
    }
  }
}
