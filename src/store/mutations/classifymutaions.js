import * as types from '../constants/types'

export const classifymutaions = {
  [types.UPDATE_SELECT_CLASSIFY] (state, classify) {
    state.currentSelectClassify.isSelected = false
    state.currentSelectClassify = classify
    state.classifySelectClassifyString = classify.item
  }
}
