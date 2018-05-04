<template>
  <div class="icon" :class="iconType">
    <span class="icon-item" :class="classMap[0]"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      iconsize: {
        type: Number
      },
      bgground: {
        type: Number
      }
    },
    computed: {
      iconType() {
        return 'icon-' + this.bgground + '-' + this.iconsize
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'

.icon
  .icon-item
    display inline-block
    vertical-align top
    background-repeat no-repeat
  &.icon-1-12
    .icon-item
      width 12px
      height 12px
      background-size 12px 12px
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
  &.icon-2-16
    .icon-item
      width 16px
      height 16px
      background-size 16px 16px
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
  &.icon-3-12
    .icon-item
      width 12px
      height 12px
      background-size 16px 16px
      &.decrease
        bg-image('decrease_3')
      &.discount
        bg-image('discount_3')
      &.guarantee
        bg-image('guarantee_3')
      &.invoice
        bg-image('invoice_3')
      &.special
        bg-image('special_3')
  &.icon-4-16
    .icon-item
      width 16px
      height 16px
      background-size 16px 16px
      &.decrease
        bg-image('decrease_4')
      &.discount
        bg-image('discount_4')
      &.guarantee
        bg-image('guarantee_4')
      &.invoice
        bg-image('invoice_4')
      &.special
        bg-image('special_4')
</style>
