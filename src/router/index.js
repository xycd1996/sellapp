import Vue from 'vue'
import Router from 'vue-router'

import Detail from '../pages/detail'

import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

import '@/common/stylus/index.styl'

Vue.use(Router)

export default new Router({
  // mode: 'history',//必须配合后端使用,否则webpack打包项目将无法显示
  linkActiveClass: 'active',
  // vue-router切换时class='v-link-active',类名修改
  routes: [
    {
      path: '/',
      redirect: '/goods',
      // 定义路由初始路径,重定向
      name: 'detail',
      component: Detail,
      children: [
        {
          path: '/goods',
          name: 'goods',
          component: goods
        },
        {
          path: '/ratings',
          name: 'ratings',
          component: ratings
        },
        {
          path: '/seller',
          name: 'seller',
          component: seller
        }
      ]
    }
  ]
})
