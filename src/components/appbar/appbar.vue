<template>
  <div v-show="showappbar" class="appbar-wrapper">
    <div class="mask"></div>
    <div class="appbar">
      <div>
        <mu-icon-button  @click="toggleSlide" class="left-button" :icon="leftIcon" :style="{color: left_color}"/>
      </div>
      <div class="title-wrapper">
        <span class="title">{{ title }}</span>
        <span  v-show="showTitleDate" class="currentDate">{{ common.selectedDate }}</span>
      </div>
    </div>
    <datepicker @selectDate="handleSelectDate" :isShow="isShowDatePicker" class="datepicker-wrapper" :dates="common.historyDates " :isSelectFirstDate="true"></datepicker>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import datepicker from '../datepicker/datepicker.vue'
  import SaveStorage from '../../assets/js/savestorage'

  const NEWESTPAGE = '/newest'
//  const CLASSIFYPAGE = '/classify'
  const COLLECTIONSPAGE = '/collections'

  export default {
    data () {
      return {
        left_color: 'white',
        isShowDatePicker: false
      }
    },
    props: {
      title: {
        type: String,
        default: '最新干货'
      },
      currentDate: {
        type: String,
        default: '2017-07-09'
      },
      leftIcon: {
        type: String,
        default: 'radio_button_checked'
      }
    },
    computed: {
      ...mapState(['common']),
      showTitleDate: function () {
        return this.$route.path.includes('newest')
      },
      showappbar: function () {
        if (this.$route.path.includes('search')) {
          return false
        } else {
          return true
        }
      }
    },
    components: {
      datepicker
    },
    methods: {
      // 点击左上角按钮切换
      toggleSlide () {
        let path = this.$route.path
        if (path.startsWith(NEWESTPAGE)) {
          this.isShowDatePicker = !this.isShowDatePicker
        } else if (path.startsWith(COLLECTIONSPAGE)) {
          SaveStorage.clear()
          this.$store.commit('UPDATE_COLLECTION_DATA')
        }
      },
      handleSelectDate () {
        /**
         *
         * @type {boolean}
         */
        this.$store.dispatch('getGanHuoByDayAction')
        this.isShowDatePicker = !this.isShowDatePicker
      }
    }
  }
</script>

<style lang="scss">
  @import "~animate.css";
  @import '../../assets/sass/_base.scss';

  .appbar-wrapper {
    .mask {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 499;
      background: $primary;
    }
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 56px;
    text-align: center;
    background: $primary;
    padding-top: 10px;
    .appbar {
      position: relative;
      background: $primary;
      z-index: 500;
      .left-button {
        position: absolute;
        left: 10px;
        top: -10px;
        height: 56px;
      }
      .title-wrapper {
        span {
          display: block;
        }
        .title {
          color: white;
          font-size: 17px;
        }
        .currentDate {
          color: gray;
          font-size: 12px;
        }
      }
    }
    .datepicker-wrapper {
      position: absolute;
      display: block;
      /*top: 56px;*/
      /*display: none;*/
      @include border-1px(hsla(120, 30%, 10%, 0.1))
    }
  }
</style>
