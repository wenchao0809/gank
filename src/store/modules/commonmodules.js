import {commonMutations} from '../mutations/commonmutations'
import {commonActions} from '../actions/commonactions'

const common = {
  state: {
    title: '最新干货',
    leftIcon: 'radio_button_checked',
    dateEm: {},
    historyDates: []
  },
  mutations: commonMutations,
  actions: commonActions,
  getters: {
  }
}

export default common
