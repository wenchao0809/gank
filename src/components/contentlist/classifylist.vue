<template>
  <div class="classifylist-wrapper">
    <div class="header-wrapper">
      <div class="header">
        <p>{{ headerDescription }}</p>
      </div>
    </div>
    <mu-divider />
    <ul class="items-wrapper" style="margin: 0; padding: 0">
      <li v-for="item in ganhuoItems" class="item">
        <item :itemGanhuo="item" :key="item.id"></item>
        <mu-divider />
      </li>
    </ul>
  </div>
</template>

<script>
  import item from './item.vue'

  export default {
    props: {
      headerDescription: {
        type: String,
        default: ''
      },
      ganhuoItems: {
        type: Array,
        default: []
      }
    },
    components: {
      item
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .classifylist-wrapper {
    .header-wrapper {
      display: table;
      vertical-align: middle;
      height: 56px;
      width: 100%;
      background: $DarkWhite;
      .header {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        font-size: 17px;
        p {
          box-sizing: bo;
          border-left: solid 4px $primary;
          padding-left: 20px;
        }
      }
    }
    .items-wrapper {
      list-style: none;
    }
  }
</style>
