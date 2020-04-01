import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/bdpv',
      name: '介接資料檢核',
      component: () => import('./views/batchDataPreview.vue')
    },
    {
      path: '/sngl',
      name: '單項功能',  // 使用說明 概括授權清單及檢核、財產申報公文產生器
      component: () => import('./views/singleFun.vue')
    },
    {
      path: '/fdcc',
      name: '比對指定日期金融機構資料',  // 比對指定日期金融機構資料
      component: () => import('./views/fdCmmdCmp.vue')
    },
    {
      path: '/tmpt',
      name: '公文範本維護',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/tmpt.vue')
    }
  ]
})
