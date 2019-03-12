import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Index from './views/index.vue'
import Default from './views/default.vue'
import System from '@/views/System/index.vue'
import Version from '@/views/Version/index.vue'
import Task from '@/views/Task/index.vue'

// 栏目
import Cat from '@/views/Cat/index.vue'
import CatAdd from '@/views/Cat/add.vue'
import CatEdit from '@/views/Cat/edit.vue'

// 角色
import Role from '@/views/Role/index.vue'
import RoleAdd from '@/views/Role/add.vue'
import RoleEdit from '@/views/Role/edit.vue'

// 用户
import User from '@/views/User/index.vue'
import UserAdd from '@/views/User/add.vue'
import UserEdit from '@/views/User/edit.vue'

import List from './views/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  
    // 登录
    {path: '/Admin/login',name: 'login',component: Login},

    // 后台首页
    {path: '/Admin/index',name: 'index',component: Index,children:[
      {path:'/Admin/index',name:'default',component:Default}, // 默认后台首页
      {path:'/Admin/system_index',name:'system_index',component:System}, // 系统设置
      {path:'/Admin/system_version',name:'system_version',component:Version}, // 系统设置
      {path:'/Admin/task_index',name:'task_index',component:Task}, // 系统设置

      // 栏目
      {path:'/Admin/cat/index',name:'cat_index',component:Cat}, 
      {path:'/Admin/cat/add',name:'cat_add',component:CatAdd}, 
      {path:'/Admin/cat/edit/:id',name:'cat_edit',component:CatEdit}, 

      // 角色
      {path:'/Admin/role/index',name:'role_index',component:Role}, 
      {path:'/Admin/role/add',name:'role_add',component:RoleAdd}, 
      {path:'/Admin/role/edit/:id',name:'role_edit',component:RoleEdit}, 

      // 用户
      {path:'/Admin/user/index',name:'user_index',component:User}, 
      {path:'/Admin/user/add',name:'user_add',component:UserAdd}, 
      {path:'/Admin/user/edit/:id',name:'user_edit',component:UserEdit}, 

      {path:'/Admin/list',name:'list',component:List}, // 模版
    ]},
    
  ]
})
