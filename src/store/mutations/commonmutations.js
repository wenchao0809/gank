import * as types from '../constants/types'

export const commonMutations = {
  [types.CHANGE_TILTE_AND_ICON] (state, value) {
    state.title = types.TITLE_MAP.get(value)
    state.leftIcon = types.LEFT_ICON_MAP.get(value)
  },
  [types.UPDATE_HISTORY_DATES] (state, dates) {
    state.historyDates = dates
    state.selectedDate = dates[0]
  },
  [types.UPDATE_SELECT_DATE] (state, selectedDate) {
    if (state.currentSelectDate.index === selectedDate.index) {
      return
    } else {
      state.currentSelectDate.isSelected = false
      state.currentSelectDate = selectedDate
      state.selectedDate = selectedDate.historyDate
    }
  }
}
