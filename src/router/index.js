import Vue from 'vue'
import Router from 'vue-router'
import newest from '../pages/newest/newest.vue'
import collections from '../pages/collections/collections.vue'
import classify from '../pages/classify/classify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newest/:date',
      name: 'newest',
      component: newest
    },
    {
      path: '/classify/:class',
      name: 'classify',
      component: classify
    },
    {
      path: '/collections',
      name: 'collections',
      component: collections
    }
  ]
})
