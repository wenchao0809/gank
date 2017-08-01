import axios from 'axios'
import common from '../modules/commonmodules'

export const ganhuoactions = {
  /**
   * 获得所选日期的干货
   * @param commit
   * @method [GET]
   */
  async getGanHuoByDayAction ({dispatch, commit}) {
    try {
      await dispatch('getHistoryDateAction')
      let splitDate = common.state.selectedDate.split('-')
      let path = `/day/${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
      let response = await axios.get(path)
      commit('UPDATE_SELECT_DATE_GANHUO', response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
}

