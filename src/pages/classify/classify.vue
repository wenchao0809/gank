<template>
<!--分类列表-->
  <div class="classify-wrapper">
    <classifypicker class="classify-picker" :classifys="ganhuo.classifys"></classifypicker>
    <div>jdfjdjffjd</div>
    <div>fjdjfdfj</div>
    <div>fjfdddddd</div>
  </div>
</template>

<script>
  import classifypicker from '../../components/classifypicker/classifypicker.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      classifypicker
    },
    computed: {
      ...mapState(['ganhuo'])
    }
  }
</script>

<style lang="scss">
  .classify-wrapper {
    position: absolute;
    top: 56px;
    width: 100%;
    bottom: 56px;
    .classify-picker {
      height: 44px;
      overflow-x: auto !important;
      overflow-y: hidden;
      line-height: 44px !important;
    }
  }
</style>
