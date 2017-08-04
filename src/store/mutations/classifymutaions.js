import * as types from '../constants/types'

export const classifymutaions = {
  [types.UPDATE_SELECT_CLASSIFY] (state, classify) {
    state.currentSelectClassify.isSelected = false
    state.currentSelectClassify = classify
    if (classify.item === '全部') {
      state.classifySelectClassifyString = 'all'
    } else {
      state.classifySelectClassifyString = classify.item
    }
  },
  [types.UPDATE_SELECT_CLASSIFY_DATA] (state, responseData) {
    if (responseData.length > 20) {
      state.moreData = true
    } else {
      state.moreData = false
    }
    state.refreshPage = 1
    state.loadPage = 2
    responseData.pop()
    state.selectedClassifyData = responseData
  },
  [types.UPDATE_SELECT_CLASSIFY__LOAD] (state, responseData) {
    if (responseData.length > 20) {
      state.moreData = true
    } else {
      state.moreData = false
    }
    responseData.pop()
    state.selectedClassifyData = [...state.selectedClassifyData, ...responseData]
    state.page++
  }
}
