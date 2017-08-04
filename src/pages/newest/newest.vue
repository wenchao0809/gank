<template>
  <div class="newest-wrapper">
    <!--refreshHeader-->
    <mu-refresh-control :refreshing="ganhuo.isShowRefresh"
                        :trigger="trigger"
                        @refresh="refresh"
                         />
    <!--content-->
    <div class="content-wrapper">
      <classifylist v-for="(items, key) in ganhuo.selectedDateData" class="classifylist" :headerDescription="key" :ganhuoItems="items" :key="key"></classifylist>
    </div>
  </div>
</template>

<script>
  import classifylist from '../../components/contentlist/classifylist.vue'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        trigger: null
      }
    },
    components: {
      classifylist
    },
    computed: {
      ...mapState(['ganhuo'])
    },
    mounted () {
      this.trigger = this.$el
    },
    methods: {
      /**
       * 下拉刷新数据
       * @returns {Promise.<void>}
       */
      async refresh () {
        console.log('jfjfj')
        this.$store.commit('UPDATE_IS_SHOW_REFRESH', true)
        await this.$store.dispatch('getGanHuoByDayAction')
        this.$store.commit('UPDATE_IS_SHOW_REFRESH', false)
      }
    },
    watch: {
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .newest-wrapper {
    position: absolute;
    top: 56px;
    bottom: 56px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    /*更改刷新控件的样式*/
    .mu-refresh-control {
      color: $primary;
    }
    .mu-circle {
      border-top-color: $primary !important;
      border-right-color: $primary !important;
      border-left-color: $primary !important;
    }
  }
</style>
