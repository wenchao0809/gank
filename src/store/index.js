import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/commonmodules'
import ganhuo from './modules/ganhuo'
import classify from './modules/classifymodules'
import search from './modules/searchmodules'
import collection from './modules/collectionmodules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    ganhuo,
    classify,
    search,
    collection
  }
})

export default store
