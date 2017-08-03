<template>
  <scrollwrapper :isShow="isShowDatePicker" :listItems="dates" ref="scroll">
    <template scope="dateItem">
      <date @selectDate="handleSelctDate" class="date" :historyDate="dateItem.item" :index="dateItem.index" ></date>
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
      isShow: false,
      isSelectFirstDate: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
    },
    watch: {
      /**
       * 监测dates的变化设置横向滚动列表的长度
       */
      dates: function () {
        this.$nextTick(() => {
          /* ***判断是否选中第一个日期 */
          if (this.isSelectFirstDate) {
            this.$store.commit('UPDATE_SELECT_DATE', this.$refs.scroll.$children[0])
            this.$refs.scroll.$children[0].isSelected = true
          }
          /* ****由于dispaly未none时无法计算宽度先大致给个宽度****/
          this.$refs.scroll.$refs.list.style.width = (34 + 15) * this.dates.length + 'px'
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
      },
      handleSelctDate () {
        /**
         * 再次抛出事件
         *
         */
        this.$emit('selectDate')
        /**
         * 点击时重新计算一下宽度
         */
        this.$nextTick(() => {
          console.log(this.$refs.scroll.$refs.list.children[0].getBoundingClientRect())
          this.$refs.scroll.$res.list.style.width = this._caculateScrollWidth() + 'px'
          this.$refs.scroll.scroll.refresh()
        })
      }
    },
    computed: {
      isShowDatePicker () {
        return this.isShow
      }
    }
  }
</script>

<style lang="scss">
  /******** 使日期居中 *****/
  .date {
    height: 56px;
  }
</style>
