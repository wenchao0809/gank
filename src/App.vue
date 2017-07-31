<template>
  <div id="app">
    <!--header-->
    <appbar :title="common.title" :leftIcon="common.leftIcon"></appbar>
    <bottomnav class="bottomnav-position"></bottomnav>

    <router-view class="main"
                 :class="{'hide-overflow': common.isHideMainOverflow}"></router-view>
  </div>
</template>

<script>
  import bottomnav from './components/bottomnav/bottomnav.vue'
  import appbar from './components/appbar/appbar.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      bottomnav,
      appbar
    },
    computed: {
      ...mapState(['common'])
    },
    mounted () {
      this.$store.dispatch('getHistoryDateAction')
    }
  }
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  .bottomnav-position {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
