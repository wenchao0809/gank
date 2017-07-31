<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <ul class="list" ref="list">
      <li class="list-item" v-for="item in listItems">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      listItems: {
        type: Array,
        default: []
      }
    },
    mounted () {
      this._initScroll()
    },
    computed: {
    },
    methods: {
      _scrollWidth () {
        let listItemEm = this.$refs.scrollWrapper.children[0].children[0]
        console.log(this.$refs.scrollWrapper.children[0].children[0])
        let box = listItemEm.getBoundingClientRect()
        let width = box.width
        let margin = 15
        return (width + margin) * this.listItems.length + 'px'
      },
      _initScroll () {
        if (!this.scroll) {
          console.log(this.$refs.scrollWrapper)
          this.scroll = new BScroll(this.$refs.scrollWrapper, {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        } else {
          this.$nextTick(() => {
            this.scroll.refresh()
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/mixin";
  .scroll-wrapper {
    @include border-1px(hsla(120, 40%, 20%, .3));
    box-sizing: border-box;
    overflow: hidden;
    .list {
      height: 56px;
      margin: 0;
      margin-left: 15px;
      padding: 0;
      list-style: none;
      .list-item {
        margin: 8px 0;
        display: inline-block;
        margin-right: 15px;
      }
    }
  }
</style>
