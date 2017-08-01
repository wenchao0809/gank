import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/commonmodules'
import ganhuo from './modules/ganhuo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    ganhuo
  }
})

export default store
