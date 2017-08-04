<template>
<!--分类列表-->
  <div class="classify-wrapper">
    <classifypicker class="classify-picker" :classifys="ganhuo.classifys"></classifypicker>
    <div class="classify-content-wrapper">
      <mu-refresh-control :refreshing="common.isShowRefresh"
                          :trigger="trigger"
                          @refresh="refresh"
      />
      <ul class="items-wrapper" style="margin: 0; padding: 0">
        <li v-for="item in classify.selectedClassifyData" class="item">
          <item :itemGanhuo="item" :key="item.id">
          </item>
          <mu-divider />
        </li>
      </ul>
      <mu-infinite-scroll :scroller="scroller"
                          :loading="common.isShowLoad"
                          loadingText="正在加载..."
                          @load="loadMore"/>
    </div>
  </div>
</template>

<script>
  import classifypicker from '../../components/classifypicker/classifypicker.vue'
  import item from '../../components/contentlist/item.vue'

  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        trigger: null,
        scroller: null
      }
    },
    components: {
      classifypicker,
      item
    },
    computed: {
      ...mapState(['ganhuo', 'common', 'classify'])
    },
    mounted () {
      this.trigger = this.$el
      this.scroller = this.$el
      this.$store.dispatch('getGanhuoByClassifyRefresh')
    },
    methods: {
      refresh () {
        this.$store.dispatch('getGanhuoByClassifyRefresh')
      },
      loadMore () {
        this.$store.dispatch('getGanhuoByClassifyLoad')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .classify-wrapper {
    position: absolute;
    /**增加父元素区域**/
    padding-top: 44px;
    top: 56px;
    width: 100%;
    bottom: 56px;
    overflow-x: hidden;
    /*overflow-y: auto;*/
    .classify-picker {
      position: fixed;
      top:  56px;
      height: 44px;
      overflow-x: auto !important;
      overflow-y: hidden;
      line-height: 44px !important;
      .classifyitem-wrapper {
        position: relative;
        font-size:  18px;
      }
    }
    .items-wrapper {
      list-style: none;
    }
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
