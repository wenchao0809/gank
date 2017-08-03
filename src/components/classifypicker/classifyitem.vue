<template>
  <div class="classifyitem-wrapper" @click="handleClassifyItemClick">
    <mu-tab :class="{'classify-selected-Border': isSelected}"  :value="item" :title="item" :key="item"></mu-tab>
  </div>
</template>

<script>
  export default {
    props: {
      item: ''
    },
    data () {
      return {
        isSelected: false
      }
    },
    methods: {
      handleClassifyItemClick () {
        if (!this.isSelected) {
          this.isSelected = true
          this.$store.commit('UPDATE_SELECT_CLASSIFY', this)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';
  .classify-selected-Border {
    @include border-1px($primary, 0, 4.5)
  }
</style>
