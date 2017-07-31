<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="newest"
                          title="最新"
                          iconClass="iconClass"
                          titleClass="iconClass"
                          to="/newest/date"
                          icon="update"/>
      <mu-bottom-nav-item value="classify"
                          title="分类"
                          iconClass="iconClass"
                          titleClass="iconClass"
                          activeClass="active"
                          to="/classify/class"
                          icon="apps"/>
      <mu-bottom-nav-item value="search"
                          title="搜索"
                          iconClass="iconClass"
                          titleClass="iconClass"
                          activeClass="active"
                          to="/search/query"
                          icon="search"/>
      <mu-bottom-nav-item value="books"
                          title="收藏"
                          iconClass="iconClass"iOS
                          titleClass="iconClass"
                          activeClass="active"
                          to="/collections"
                          icon="favorite"/>
    </mu-bottom-nav>
  </mu-paper>

</template>

<script>
  export default {
    data () {
      return {
        bottomNav: '',
        isActive: true
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
        this.$store.commit('CHANGE_TITLE_AND_ICON', val)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';
  .mu-bottom-nav-shift {
    background: $DarkWhite !important;
    .mu-buttom-item {
      .mu-buttom-item-wrapper {
        .mu-bottom-item-text {
        }
      }
    }
  }
.iconClass {
  color: #41b883 !important;

}

.active {
  color: #1F2D3D;
}

</style>
