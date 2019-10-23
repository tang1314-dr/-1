import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login=()=>import('../pages/login.vue')
const index=()=>import('../pages/index.vue')
const manage=()=>import('../pages/manage.vue')
const welcome=()=>import('../pages/welcome.vue')
const banner=()=>import('../pages/banner.vue')
const family=()=>import('../pages/family.vue')
const homemaking=()=>import('../pages/homemaking.vue')
const water=()=>import('../pages/water.vue')
const changePassManage=()=>import('../pages/changePassManage.vue')
const maintain=()=>import('../pages/maintain.vue')

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path: 'manage',
          name: '管理员管理',
          component: manage
        },
        {
          path:'',
          name:'欢迎',
          component: welcome
        },
        {
          path:'banner',
          name:'轮播图管理',
          component: banner
        },
        {
          path:'family',
          name:'家教管理',
          component: family
        },
        {
          path:'homemaking',
          name:'家政管理',
          component: homemaking
        },
        {
          path:'water',
          name:'水站管理',
          component: water
        },
        {
          path:'changePassManage',
          name:'修改密码',
          component: changePassManage
        },
        {
          path:'maintain',
          name:'维修管理',
          component: maintain
        },
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
