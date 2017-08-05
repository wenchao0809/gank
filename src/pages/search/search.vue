<template>
  <div class="search-wrapper">
    <mu-refresh-control :refreshing="common.isShowRefresh"
                        :trigger="trigger"
                        @refresh="refresh"
    />
    <div class="search-input-wrapper">
      <mu-text-field hintText="按分类搜索" v-model="queryString" type="text" icon="search"/>
      <mu-divider />
    </div>
    <ul class="items-wrapper" style="margin: 0; padding: 0">
      <li v-for="item in search.searchResults" class="item">
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
</template>

<script>
  import item from '../../components/contentlist/item.vue'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        queryString: '',
        trigger: null,
        scroller: null,
        /**
         * 防抖动
         */
        timeout: 0
      }
    },
    components: {
      item
    },
    watch: {
      queryString: function () {
        if (this.queryString === '') {
          clearTimeout(this.timeOut)
          this.$store.dispatch('getRandomGan')
          return
        }
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$store.dispatch('searchGanRefresh', this.queryString)
        }, 800)
      }
    },
    computed: {
      ...mapState(['common', 'search'])
    },
    mounted () {
      this.trigger = this.$el
      this.scroller = this.$el
      console.log('fjfj')
      this.$store.dispatch('getRandomGan')
    },
    methods: {
      refresh () {
        /**
         * 刷新代码判断是刷新搜索结果还是刷新随机结果
         */
        if (this.queryString !== '') {
          this.$store.dispatch('searchGanRefresh', this.queryString)
        } else {
          this.$store.dispatch('getRandomGan')
        }
      },
      loadMore () {
        if (this.queryString !== '') {
          this.$store.dispatch('searchGanLoad', this.queryString)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .search-wrapper {
    position: absolute;
    top: 0px;
    bottom: 56px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .search-input-wrapper {
      height: 56px;
      text-align: center;
      width: 100%;
      background: white;
      .focus-state {
        color: #41b883;
      }
      .mu-text-field {
        text-align: left;
        .mu-text-field-focus-line {
          background-color: #41b883;
        }
      }
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
