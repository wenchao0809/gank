<template>
  <div id="app">
    <!--header-->
    <appbar class="app-bar" :title="common.title" :leftIcon="common.leftIcon"></appbar>
    <!--<datepicker  isShow="" class="datepicker-wrapper" :dates="common.historyDates"></datepicker>-->
    <bottomnav class="bottomnav-position"></bottomnav>
    <!--<dateC historyDate="2017-07-08"></dateC>-->
    <router-view class="main"
                 :class="{'hide-overflow': common.isHideMainOverflow}"></router-view>
  </div>
</template>

<script>
  import bottomnav from './components/bottomnav/bottomnav.vue'
  import appbar from './components/appbar/appbar.vue'
  import { mapState } from 'vuex'
  import dateC from './components/datepicker/date/date.vue'
  import datepicker from './components/datepicker/datepicker.vue'

  export default {
    name: 'app',
    components: {
      bottomnav,
      appbar,
      dateC,
      datepicker
    },
    computed: {
      ...mapState(['common'])
    },
    mounted () {
      this.$store.dispatch('getInitPageDataAction')
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
    z-index: 500;
    width: 100%;
  }
  .app-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 500;
  }
}
</style>
