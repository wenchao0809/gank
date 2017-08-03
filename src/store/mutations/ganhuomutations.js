import * as types from '../constants/types'

export const ganhuomutaions = {
  [types.UPDATE_SELECT_DATE_GANHUO] (state, response) {
    state.selectedDateData = response.results
    state.ganhuoClassify = response.category
  },
  [types.UPDATE_IS_SHOW_REFRESH] (state, isShowRefresh) {
    state.isShowRefresh = isShowRefresh
  },
  [types.UPDATE_CLASSIFYS] (state, classifys) {
    state.classifys = classifys
    state.classifys.unshift('全部')
    state.classifys = [...state.classifys, ...['拓展资源', '瞎推荐', 'App']]
  }
}

