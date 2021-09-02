import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Test from '../views/Container'
import List from '../views/components/List'
import ImgDom from '../views/components/Img'
import DemoTest from '../views/components/DemoTest'

Vue.use(VueRouter)

const routes = [{
    mode: 'history',
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/home',
  },
  //首页
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    redirect: '/test/list',
    children: [{
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'imgDom',
        name: 'imgDom',
        component: ImgDom
      },
      {
        path: 'demoTest',
        name: 'demoTest',
        component: DemoTest
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
