import * as types from '../constants/types'

export const commonMutations = {
  /**
   * 根据路由跳转改变appbar title和icon
   * @param state
   * @param value
   */
  [types.CHANGE_TILTE_AND_ICON] (state, value) {
    state.title = types.TITLE_MAP.get(value)
    state.leftIcon = types.LEFT_ICON_MAP.get(value)
  },
  /**
   * 更新历史日期
   * @param state
   * @param dates
   */
  [types.UPDATE_HISTORY_DATES] (state, dates) {
    state.historyDates = dates
    state.selectedDate = dates[0]
  },
  /**
   * 更新选择日期
   * @param state
   * @param selectedDate
   */
  [types.UPDATE_SELECT_DATE] (state, selectedDate) {
    if (state.currentSelectDate === selectedDate) {
      return
    } else {
      state.currentSelectDate.isSelected = false
      state.currentSelectDate = selectedDate
      state.selectedDate = selectedDate.historyDate
    }
  },
  /**
   * 更新是否显示刷新控件
   * @param state
   * @param isShowRefresh
   */
  [types.UPDATE_IS_SHOW_REFRESH] (state, isShowRefresh) {
    state.isShowRefresh = isShowRefresh
  },
  /**
   * 更新是否显示load控件
   * @param state
   * @param isShowLoad
   */
  [types.UPDATE_IS_SHOW_LOAD] (state, isShowLoad) {
    state.isShowLoad = isShowLoad
  }
}
