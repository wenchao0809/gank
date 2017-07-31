<template>
  <div id="app">
    <!--header-->
    <appbar :title="common.title" :leftIcon="common.leftIcon"></appbar>
    <bottomnav class="bottomnav-position"></bottomnav>
    <datepicker :dates="common.historyDates"></datepicker>
  </div>
</template>

<script>
  import bottomnav from './components/bottomnav/bottomnav.vue'
  import appbar from './components/appbar/appbar.vue'
  import { mapState } from 'vuex'
  import datepicker from './components/datepicker/datepicker.vue'

  export default {
    name: 'app',
    components: {
      bottomnav,
      appbar,
      datepicker
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
  .bottomnav-position {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
