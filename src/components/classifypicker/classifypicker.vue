<template>
  <mu-tabs  :value="activeTab" @change="handleTabChange" ref="mutabs">
    <classifyitem v-for="item in classifys" :item="item" :key="item+1"></classifyitem>
  </mu-tabs>
</template>

<script>
  import classifyitem from './classifyitem.vue'

  export default {
    data () {
      return {
        activeTab: '全部',
        isSelected: false
      }
    },
    props: {
      classifys: {
        type: Array,
        default: []
      }
    },
    components: {
      classifyitem
    },
    methods: {
      handleTabChange (value) {
      }
    },
    watch: {
      classifys: function () {
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .classify-text {
    font-size: 17px;
  }

  .mu-tabs {
    background: white !important;
    .mu-tab-text {
      color: #99A9BF;
      white-space: nowrap;
    }
    .active-line {
      background: $primary !important;
    }
  }

  .selectedBorder {
    @include border-1px($primary, 0, 3)
  }
</style>
