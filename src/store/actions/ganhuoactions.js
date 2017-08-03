import axios from 'axios'
import common from '../modules/commonmodules'

export const ganhuoactions = {
  /**
   * 获得初始化页面的数据
   * 首先获得日期数据，之后后去最新的日期的干货数据
   * @param dispatch
   * @param commit
   * @returns {Promise.<void>}
   */
  async getInitPageDataAction ({dispatch, commit}) {
    try {
      commit('UPDATE_IS_SHOW_REFRESH', true)
      await dispatch('getHistoryDateAction')
      let splitDate = common.state.selectedDate.split('-')
      let path = `/day/${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
      let response = await axios.get(path)
      commit('UPDATE_IS_SHOW_REFRESH', false)
      commit('UPDATE_SELECT_DATE_GANHUO', response.data)
    } catch (e) {
      console.log(e.message)
    }
  },
  /**
   * 获得所选日期的干货
   * @param commit
   * @method [GET]
   */
  async getGanHuoByDayAction ({dispatch, commit}) {
    try {
      let splitDate = common.state.selectedDate.split('-')
      let path = `/day/${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
      commit('UPDATE_IS_SHOW_REFRESH', true)
      let response = await axios.get(path)
      commit('UPDATE_IS_SHOW_REFRESH', false)
      commit('UPDATE_SELECT_DATE_GANHUO', response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
}

