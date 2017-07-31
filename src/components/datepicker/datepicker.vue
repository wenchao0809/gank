<template>
  <scrollwrapper :isShow="isShowDatePicker" :listItems="dates" ref="scroll">
    <template scope="dateItem">
      <date :historyDate="dateItem.item"></date>
    </template>
  </scrollwrapper>
</template>


<script>
  import date from '../datepicker/date/date.vue'
  import scrollwrapper from '../scrollwrappper/scrollwrpper.vue'

  export default {
    props: {
      dates: {
        type: Array,
        default () {
          return ['2017-07-12']
        }
      },
      isShow: false
    },
    mounted () {
    },
    watch: {
      dates: function () {
        this.$nextTick(() => {
          this.$refs.scroll.$refs.list.style.width = this._caculateScrollWidth() + 'px'
          this.$refs.scroll.scroll.refresh()
        })
      }
    },
    components: {
      date,
      scrollwrapper
    },
    methods: {
      _caculateScrollWidth () {
        let margin = 15
        let box = this.$refs.scroll.$refs.list.children[0].getBoundingClientRect()
        return (box.width + margin) * this.dates.length
      }
    },
    computed: {
      isShowDatePicker () {
        return this.isShow
      }
    }
  }
</script>

<style>
</style>
