import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'

// 1.通过vue.use（插件），安装插件
Vue.use(Router)

// 2.创建VueRouter对象
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },{
    path: '/home',
    component: Home
  },{
    path: '/about',
    component: About
  }
]

// 3.配置路由和组件之间的映射关系
export default new Router({
  routes
})
