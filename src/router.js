import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './views/ProductList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ProductList',
      meta: {
        title: '상품리스트'
      },
      component: ProductList
    },
    {
      path: '/ProoductView',
      name: 'ProoductView',
      meta: {
        title: '상품상세'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ProoductView" */ './views/ProoductView.vue')
    },
    {
      path: '/productCollectBenefits',
      name: 'productCollectBenefits',
      meta: {
        title: '추가혜택가'
      },
      component: () => import(/* webpackChunkName: "productCollectBenefits" */ './views/productCollectBenefits.vue')
    },
    { path: "*", component: ProductList },
  ]
})
