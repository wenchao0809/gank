import {ganhuomutaions} from '../mutations/ganhuomutations'
import {ganhuoactions} from '../actions/ganhuoactions'

const ganhuo = {
  state: {
    selectedDateData: [],
    ganHuoClassify: [],
    selectedClassifyData: [],
    isShowRefresh: false
  },
  actions: ganhuoactions,
  mutations: ganhuomutaions
}

export default ganhuo
