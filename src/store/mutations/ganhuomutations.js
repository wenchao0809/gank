import * as types from '../constants/types'

export const ganhuomutaions = {
  [types.UPDATE_SELECT_DATE_GANHUO] (state, classify, results) {
    state.selectedDateData = results
    state.ganhuoClassify = classify
  }
}

