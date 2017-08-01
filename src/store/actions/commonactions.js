import axios from 'axios'

const commonActions = {
  /**
   * 请求发布过干货的日期
   * @method [GET]
   */
  async  getHistoryDateAction ({commit}) {
    try {
      let response = await axios.get('/day/history')
      commit('UPDATE_HISTORY_DATES', response.data.results)
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default commonActions
