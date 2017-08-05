import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/commonmodules'
import ganhuo from './modules/ganhuo'
import classify from './modules/classifymodules'
import searchmodules from './modules/searchmodules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    ganhuo,
    classify,
    searchmodules
  }
})

export default store
