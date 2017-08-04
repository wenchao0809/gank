import {ganhuomutaions} from '../mutations/ganhuomutations'
import {ganhuoactions} from '../actions/ganhuoactions'

const ganhuo = {
  state: {
    classifys: [],
    selectedDateData: [],
    ganHuoClassify: []
  },
  actions: ganhuoactions,
  mutations: ganhuomutaions
}

export default ganhuo
