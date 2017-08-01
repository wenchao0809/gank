import axios from 'axios'
import common from '../modules/commonmodules'

export const ganhuoactions = {
  /**
   * 获得所选日期的干货
   * @param commit
   * @method [GET]
   */
  async getGanHuoByDayAction ({dispatch, commit}) {
    let result = await dispatch('getHistoryDateAction')
    console.log(result)
    console.log(common.state.selectedDate)
    let splitDate = common.state.selectedDate.split('-')
    let path = `/day/${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
    console.log(path)
    axios.get(path)
      .then((response) => {
      })
      .then(function (error) {
        console.log(error)
      })
  }
}

