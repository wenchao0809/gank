<template>
  <div class="appbar-wrapper">
    <div>
      <mu-icon-button  class="left-button" :icon="leftIcon" :style="{color: left_color}"/>
    </div>
    <div class="title-wrapper">
      <span class="title">{{ title }}</span>
      <span  class="currentDate">{{ currentDate}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        left_color: '#41b883'
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
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/_base.scss';

  .appbar-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height:56px;
    text-align: center;
    background: $DarkWhite;
    padding: 10px;
    .left-button {
      left: 10px;
      top: 0px;
      height: 56px;
      position: absolute;
    }
    .title-wrapper {
      span {
        display: block;
      }
      .title {
        color: #41b883;
        font-size: 17px;
      }
      .currentDate {
        color: gray;
        font-size: 12px;
      }
    }
  }
</style>
