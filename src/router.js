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

// 幻灯片
import Slide from '@/views/Slide/index.vue'
import SlideAdd from '@/views/Slide/add.vue'
import SlideEdit from '@/views/Slide/edit.vue'

// 栏目管理
import Columns from '@/views/Columns/index.vue'
import ColumnsAdd from '@/views/Columns/add.vue'
import ColumnsEdit from '@/views/Columns/edit.vue'

// 文章管理
import Article from '@/views/Article/index.vue'
import ArticleAdd from '@/views/Article/add.vue'
import ArticleEdit from '@/views/Article/edit.vue'

// 产品管理
import Product from '@/views/Product/index.vue'
import ProductAdd from '@/views/Product/add.vue'
import ProductEdit from '@/views/Product/edit.vue'

// 专题管理
import Seminar from '@/views/Seminar/index.vue'
import SeminarAdd from '@/views/Seminar/add.vue'
import SeminarEdit from '@/views/Seminar/edit.vue'

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

      // 幻灯片
      {path:'/Admin/slide/index',name:'slide_index',component:Slide}, 
      {path:'/Admin/slide/add',name:'slide_add',component:SlideAdd}, 
      {path:'/Admin/slide/edit/:id',name:'slide_edit',component:SlideEdit}, 

      // 栏目管理
      {path:'/Admin/columns/index/:is_type',name:'columns_index',component:Columns}, 
      {path:'/Admin/columns/add/:is_type',name:'columns_add',component:ColumnsAdd}, 
      {path:'/Admin/columns/edit/:id/:is_type',name:'columns_edit',component:ColumnsEdit}, 

      // 文章管理
      {path:'/Admin/article/index',name:'article_index',component:Article}, 
      {path:'/Admin/article/add',name:'article_add',component:ArticleAdd}, 
      {path:'/Admin/article/edit/:id',name:'article_edit',component:ArticleEdit}, 

      // 产品管理
      {path:'/Admin/product/index',name:'product_index',component:Product}, 
      {path:'/Admin/product/add',name:'product_add',component:ProductAdd}, 
      {path:'/Admin/product/edit/:id',name:'product_edit',component:ProductEdit},

      // 产品管理
      {path:'/Admin/seminar/index',name:'seminar_index',component:Seminar}, 
      {path:'/Admin/seminar/add',name:'seminar_add',component:SeminarAdd}, 
      {path:'/Admin/seminar/edit/:id',name:'seminar_edit',component:SeminarEdit},

      {path:'/Admin/list',name:'list',component:List}, // 模版
    ]},
    
  ]
})
