<template>
  <div class="detail">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
        <div class="tab-item"><router-link :to="{ path: '/goods' }">商品</router-link></div>
        <div class="tab-item"><router-link :to="{ path: '/ratings' }">评论</router-link></div>
        <div class="tab-item"><router-link :to="{ path: '/seller' }">商家</router-link></div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">

import header from '@/components/header/header'

const ERR_OK = 0

export default {
  data() {
    return {
      seller: {},
      goods: []
    }
  },
  created() {
    // 同时获取多个数据
    this.axios.all([
      this.axios.get('/api/seller')
      // this.axios.get('/api/goods')
    ])
      .then(this.axios.spread((seller, goods) => {
        if (seller.data.errno === ERR_OK) {
          this.seller = seller.data.data
        }
        // if (goods.data.errno === ERR_OK) {
        //   this.goods = goods.data.data
        // }
      }))
  },
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus"  rel="stylesheet/stylus" scoped>
@import '../common/stylus/mixin.styl'

.detail
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
</style>
