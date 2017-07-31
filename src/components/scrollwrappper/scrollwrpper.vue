<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    name="custom-classes-transition"
  >
  <div v-show="isShow"
       class="scroll-wrapper" ref="scrollWrapper">
    <ul class="list" ref="list">
      <li class="list-item" v-for="item in listItems">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import Velocity from 'velocity-animate'
  export default {
    props: {
      listItems: {
        type: Array,
        default: []
      },
      isShow: false
    },
    mounted () {
      this._initScroll()
    },
    computed: {
    },
    methods: {
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
      },
      beforeEnter (el) {
        el.style.top = '0'
      },
      enter (el, done) {
        Velocity(el, {top: '56px'}, {duration: 200, easing: 'easeInSine', complete: done})
      },
      leave (el, done) {
        Velocity(el, {top: '0px'}, {duration: 200, easing: 'easeOutSine', complete: done})
      },
      afterLeave (el) {
        el.style.top = '0'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/base";
  @import "~animate.css";

  .scroll-wrapper {
    animation-duration: .2s;
    width: 100%;
    background: white;
    overflow: hidden;
    .list {
      height: 56px;
      margin: 0;
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
