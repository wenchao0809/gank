<template>
  <div  :class="{selectedBorder: isSelected}" class="date-wrapper">
    <div class="top">
    <span class="day"> {{ day }} </span>
    <sub class="weekDay">{{ weekDay }}</sub>
    </div>
    <div class="bottom">{{ month }}</div>
  </div>
</template>

<script>
  const DAYMAP = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const MONTHMAP = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

  export default {
    props: {
      historyDate: {
        type: String,
        default: '2017-09-8'
      },
      isSelcted: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      day () {
        let rawDate = new Date(this.historyDate).getDate()
        return rawDate < 10 ? '0' + rawDate : '' + rawDate
      },
      weekDay () {
        return DAYMAP[new Date(this.historyDate).getDay()]
      },
      month () {
        return MONTHMAP[new Date(this.historyDate).getMonth()]
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/sass/_base.scss';

  .date-wrapper {
    text-align: center;
    .top {
      .day {
        font-size: 15px;
        vertical-align: middle;
      }
      .weekDay {
        font-size: 8px;
        vertical-align: middle;
      }
    }
    .bottom {
      color: gray;
      font-size: 8px;
    }
  }
  .selectedBorder {
    @include border-1px(hsla(120, 50%, 30%, 0.5), -10, 2)
  }
</style>
