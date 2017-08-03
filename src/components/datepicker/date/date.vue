<template>
  <div v-on:click="handleClick($event)" :class="{selectedBorder: isSelected }" class="date-wrapper" ref="date">
    <div   class="top">
    <span class="day"> {{ day }} </span>
    <sub class="weekDay">{{ weekDay }}</sub>
     <span class="bottom">{{ month }}</span>
    </div>
  </div>
</template>

<script>
  const DAYMAP = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const MONTHMAP = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

  export default {
    data () {
      return {
        isSelected: false
      }
    },
    props: {
      historyDate: {
        type: String,
        default: '2017-09-8'
      },
      index: {
        type: Number,
        default: 0
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
    },
    methods: {
      handleClick ($event) {
        if (!this.isSelected) {
          this.isSelected = !this.isSelected
        }
        this.$store.commit('UPDATE_SELECT_DATE', this)
        this.$emit('selectDate')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/sass/_base.scss';

  .date-wrapper {
    display: table;
    text-align: center;
    vertical-align: middle;
    font-size: 0;
    .top {
      display: table-cell;
      vertical-align: middle;
      .day {
        font-size: 15px;
      }
      .weekDay {
        font-size: 8px;
      }
    }
    .bottom {
      display: block;
      color: gray;
      font-size: 8px;
    }
  }

  .selectedBorder {
    @include border-1px($primary, 0, 3)
  }

</style>
