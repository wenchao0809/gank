<template>
  <div class="item-wrapper">
    <div class="description-wrapper">
      <p class="descriptieon" style="margin: 0; padding: 0">{{ ganhuoDescription }}</p>
      <div class="label-wrapper">
        <div class="author">
          <mu-icon value="perm_identity"/>
          <span class="text">{{ who }}</span>
        </div>
        <div class="publish-date-wrapper">
          <mu-icon value="query_builder"/>
          <span class="text"> {{ date }} </span>
        </div>
        <div class="classify">
          <slot name="classify-label" :classify="classify"></slot>
        </div>
      </div>
    </div>
    <!--<div class="img-wrapper">-->
      <img v-if="itemGanhuo.images" :src='itemGanhuo.images[0]' alt="a imge for ganhuo" style="width: 100px; height: 100px">
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    props: {
      itemGanhuo: {
        type: Object,
        default: {}
      }
    },
    computed: {
      ganhuoDescription: function () {
        return this.itemGanhuo.desc
      },
      who: function () {
        return this.itemGanhuo.who
      },
      date: function () {
        let tempDateArray = this.itemGanhuo.publishedAt.split('T')
        let day = tempDateArray[0].match(/(\d{2}-\d{2})$/g)
        let time = tempDateArray[1].match(/^(\d{2}:\d{2})/g)
        return day + '  ' + time
      },
      classify: function () {
        return this.itemGanhuo.type
      }
    }
  }
</script>

<style lang="scss">
.item-wrapper {
  display: flex;
  padding: 10px;
  .description-wrapper {
    flex: 1;
      .label-wrapper {
        position: relative;
        bottom: 0;
        margin-top: 10px;
        font-size: 10px;
        .mu-icon {
          color: #41b883;
          vertical-align: middle;
        }
        .author, .publish-date-wrapper, .classify {
          display: inline-block;
          span {
            vertical-align: middle;
            margin-right: 10px;
          }
      }
    }
  }
  .image-wrapper {
    display: block;
    flex: 0 0 100px;
    img {
    }
  }

}
</style>
