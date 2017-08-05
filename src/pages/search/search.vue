<template>
  <div class="search-wrapper">
    <div class="search-input-wrapper">
      <mu-text-field hintText="按分类搜索" v-model="queryString" type="text" icon="search"/>
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
  export default {
    data () {
      return {
        queryString: ''
      }
    },
    watch: {
      queryString: function () {
        let timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
        }, 500)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .search-wrapper {
    position: absolute;
    top: 0;
    bottom: 56px;
    width: 100%;
    .search-input-wrapper {
      position: fixed;
      z-index: 600;
      top: 0;
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
  }
</style>
