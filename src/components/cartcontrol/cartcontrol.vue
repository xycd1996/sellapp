<template>
  <div class="cartcontrol">
    <transition name="decrease-action">
      <div v-show="food.count>0" class="cart-decrease icon-remove_circle_outline" @click.stop.prevent="decreaseCart"></div>
    </transition>
    <transition name="count-action">
      <div v-show="food.count>0" class="cart-count"> {{food.count}} </div>
    </transition>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue' // 增加或减少获取的数据属性时，引入vue
  
  export default {
    props: {
      food: {
        type: Object,
        default: null
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1) // 利用Vue.set进行添加属性操作
        } else {
          this.food.count++
        }
        this.$bus.emit('add', event.target) // 给非父子组件shopcart传递以add为命名的事件，value为eventtarget
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px 6px 0 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
    &.decrease-action-enter-active, &.decrease-action-leave-active
      transition all 0.5s linear
    &.decrease-action-enter, &.decrease-action-leave-to
      opacity 0
      transform translate3d(24px, 0, 0) rotate(90deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
    &.count-action-enter-active, &.count-action-leave-active
      transition all 0.5s linear
    &.count-action-enter, &.count-action-leave-to
      opacity 0
  .cart-add
    display inline-block
    padding 6px 6px 0 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
</style>
