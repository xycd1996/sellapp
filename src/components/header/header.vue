<template>
    <div class="header">
        <div class="content-warpper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟内送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
                <div @click="showDetail" v-if="seller.supports" class="support-count">
                    <span class="count">{{seller.supports.length}}个</span>
                    <i class="icon-keyboard_arrow_right"></i>
                </div>
            </div>
        </div>
        <div @click="showDetail" class="bulletin-warpper">
            <span class="bulletin-title"></span><span class="bulletin-text"> {{seller.bulletin}} </span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
          <img width="100%" :src="seller.avatar">
        </div>
        <transition name="fade">
          <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
              <div class="detail-main">
                <h1 class="name"> {{seller.name}} </h1>
                <div class="star-wrapper">
                  <v-star :size="size" :score="seller.score"></v-star>
                </div>
                <div class="title">
                  <div class="line"></div>
                  <div class="text">优惠信息</div>
                  <div class="line"></div>
                </div>
                <ul v-if="seller.supports" class="supports">
                  <li class="support-item" v-for="(item,index) in seller.supports">
                    <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                    <span class="text"> {{seller.supports[index].description}} </span>
                  </li>
                </ul>
                <div class="title">
                  <div class="line"></div>
                  <div class="text">商家公告</div>
                  <div class="line"></div>
                </div>
                <div class="bulletin"> 
                  <p class="content"> {{seller.bulletin}} </p> 
                </div>
              </div>
            </div>
            <div @click="showDetail" class="detail-close">
              <i class="icon-close"></i>
            </div>
          </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
import star from '@/components/star/star'
import icon from '@/components/icon/icon'

export default {
  data() {
    return {
      size: 48,
      detailShow: false
    }
  },
  props: {
    seller: {
      type: Object,
      default: null
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail() {
      this.detailShow = !this.detailShow
    }
  },
  components: {
    'v-star': star,
    'v-icon': icon
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin'

.header
  position relative
  overflow hidden
  color #fff
  background-color rgba(7, 17, 27, 0.5)
  .content-warpper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    // 清除avatar和title之间的空隙
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 4px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          vertical-align top
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          font-weight bold
          line-height 18px
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        .icon
          display inline-block
          width 12px
          height 12px
          margin-right 4px
          vertical-align top
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
      .support-count
        position absolute
        right 12px
        bottom 16px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-align center
        .count
          vertical-align top
          font-size 10px
        .icon-keyboard_arrow_right
          margin-left 2px
          line-height 24px
          font-size 10px
  .bulletin-warpper
    position relative
    padding 0 12px
    height 28px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background-color rgba(7, 17, 27, 0.2)
    .bulletin-title
      display inline-block
      margin-top 8px
      width 22px
      height 12px
      vertical-align top
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      margin 0 4px
      font-size 10px
      line-height 28px
    .icon-keyboard_arrow_right
      position absolute
      right 5px
      font-size 10px
      line-height 28px
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
  .detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
    background rgba(7, 17, 27, 0.8)
    backdrop-filter blur(10px) // 仅在iphone上可以显示为背景模糊效果
    &.fade-enter-active, &.fade-leave-active
      transition opacity 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
    .detail-wrapper
      min-height 100%
      width 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          line-height 16px
          font-size 16px
          font-weight 700
          text-align center
        .star-wrapper
          margin-top 16px
          padding 2px 0
          text-align center
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
          .line
            flex 1
            position relative
            top -6px
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0 12px
            font-size 14px
            font-weight 700
        .supports
          width 80%
          margin 0 auto
          .support-item
            padding 0 12px
            margin-bottom 12px
            font-size 0
            &:last-child
              margin-bottom 0
            .icon
              display inline-block
              width 16px
              height 16px
              vertical-align top
              background-size 16px 16px
              background-repeat no-repeat
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              margin-left 6px
              line-height 16px
              font-size 12px
              font-weight 200
        .bulletin
          margin 0 auto
          width 80%
          .content
            padding 0 12px
            line-height 24px
            font-size 12px
            font-weight 200
    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
</style>
