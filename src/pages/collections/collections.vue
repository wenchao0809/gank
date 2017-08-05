<template>
  <div class="collection-wrapper">
    <!--<mu-refresh-control :refreshing="ganhuo.isShowRefresh"-->
                        <!--:trigger="trigger"-->
                        <!--@refresh="refresh"-->
    <!--/>-->
    <!--content-->
    <div class="content-wrapper">
      <classifylist v-for="(items, key) in collection.collectionData" class="classifylist" :headerDescription="key" :ganhuoItems="items" :key="key"></classifylist>
    </div>
    <!--tip-->
    <div v-show="!collection.collectionData" class="tips">
      长按每条干货可以添加收藏哦！
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import classifylist from '../../components/contentlist/classifylist.vue'

  export default {
    components: {
      classifylist
    },
    computed: {
      ...mapState(['collection'])
    },
    mounted () {
      this.$store.commit('UPDATE_COLLECTION_DATA')
    }
  }
</script>

<style lang="scss">
  .collection-wrapper {
    position: absolute;
    width: 100%;
    top: 56px;
    bottom: 56px;
    .tips {
      margin-top: 56px;
      text-align: center;
    }
  }
</style>
