import axios from 'axios'

export const commonActions = {
  /**
   * 请求发布过干货的日期
   * @method [GET]
   */

  getHistoryDateAction ({commit}) {
    axios.get('/day/history')
       .then(function (response) {
         commit('UPDATE_HISTORY_DATES', response.data.results)
       })
       .then(function (error) {
         console.log(error)
       })
  }
}

export default commonActions
