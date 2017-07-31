import * as types from '../constants/types'

export const commonMutations = {
  [types.CHANGE_TILTE_AND_ICON] (state, value) {
    state.title = types.TITLE_MAP.get(value)
    state.leftIcon = types.LEFT_ICON_MAP.get(value)
  },
  [types.UPDATE_HISTORY_DATES] (state, dates) {
    state.historyDates = dates
  }
}
