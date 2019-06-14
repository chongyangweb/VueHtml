import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Index from './views/index.vue'
import Default from './views/default2.vue'
import System from '@/views/System/index.vue'
import Version from '@/views/Version/index.vue'
import Task from '@/views/Task/index.vue'

// 404视图
import Error404 from '@/views/Error/404.vue'

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

// 其他设置
import OtherSetting from '@/views/OtherSetting/index.vue'

// 配置 微信app_id等
import Config from '@/views/Config/index.vue'

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

// 商品管理
import Goods from '@/views/Goods/index.vue'
import GoodsAdd from '@/views/Goods/add.vue'
import GoodsEdit from '@/views/Goods/edit.vue'

// 商品栏目
import GoodsCat from '@/views/GoodsCat/index.vue'
import GoodsCatAdd from '@/views/GoodsCat/add.vue'
import GoodsCatEdit from '@/views/GoodsCat/edit.vue'

// 商品品牌
import GoodsBrand from '@/views/GoodsBrand/index.vue'
import GoodsBrandAdd from '@/views/GoodsBrand/add.vue'
import GoodsBrandEdit from '@/views/GoodsBrand/edit.vue'

// 店铺幻灯片
import GoodsSlide from '@/views/GoodsSlide/index.vue'
import GoodsSlideAdd from '@/views/GoodsSlide/add.vue'
import GoodsSlideEdit from '@/views/GoodsSlide/edit.vue'

// 商品评论
import GoodsComment from '@/views/GoodsComment/index.vue'

// 订单列表
import Order from '@/views/Order/index.vue'
import OrderInfo from '@/views/Order/info.vue'

// 售后服务
import GoodsServerEdit from '@/views/GoodsServer/edit.vue'

// 微信公众号
// 商品栏目
import WechatCat from '@/views/WechatCat/index.vue'
import WechatCatAdd from '@/views/WechatCat/add.vue'
import WechatCatEdit from '@/views/WechatCat/edit.vue'

/****
 * 答题系统
***/

// 年级
import TeacherGrade from '@/views/TeacherGrade/index.vue'
import TeacherGradeAdd from '@/views/TeacherGrade/add.vue'
import TeacherGradeEdit from '@/views/TeacherGrade/edit.vue'

// 科目
import TeacherSubject from '@/views/TeacherSubject/index.vue'
import TeacherSubjectAdd from '@/views/TeacherSubject/add.vue'
import TeacherSubjectEdit from '@/views/TeacherSubject/edit.vue'

// 材料
import TeacherMaterial from '@/views/TeacherMaterial/index.vue'
import TeacherMaterialAdd from '@/views/TeacherMaterial/add.vue'
import TeacherMaterialEdit from '@/views/TeacherMaterial/edit.vue'

// 问题
import TeacherQuestion from '@/views/TeacherQuestion/index.vue'
import TeacherQuestionAdd from '@/views/TeacherQuestion/add.vue'
import TeacherQuestionEdit from '@/views/TeacherQuestion/edit.vue'

// 公共题库问题
import TeacherQuestionPublic from '@/views/TeacherQuestionPublic/index.vue'
import TeacherQuestionPublicAdd from '@/views/TeacherQuestionPublic/add.vue'
import TeacherQuestionPublicEdit from '@/views/TeacherQuestionPublic/edit.vue'

// 我的班级
import TeacherClass from '@/views/TeacherClass/index.vue'
import TeacherClassAdd from '@/views/TeacherClass/add.vue'
import TeacherClassEdit from '@/views/TeacherClass/edit.vue'

// 我的班级
import TeacherPaper from '@/views/TeacherPaper/index.vue'
import TeacherPaperAdd from '@/views/TeacherPaper/add.vue'
import TeacherPaperEdit from '@/views/TeacherPaper/edit.vue'


import List from './views/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
      hidden: true
      // component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true },
    {path: '/404',name: '404',component: Error404},
  
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

      // 专题管理
      {path:'/Admin/seminar/index',name:'seminar_index',component:Seminar}, 
      {path:'/Admin/seminar/add',name:'seminar_add',component:SeminarAdd}, 
      {path:'/Admin/seminar/edit/:id',name:'seminar_edit',component:SeminarEdit},

      // 其他设置
      {path:'/Admin/other_setting/index',name:'other_setting',component:OtherSetting}, 

      // 设置 微信app_id 等
      {path:'/Admin/config/index',name:'config_index',component:Config}, 

      // 商品管理
      {path:'/Admin/goods/index',name:'goods_index',component:Goods}, 
      {path:'/Admin/goods/add',name:'goods_add',component:GoodsAdd},
      {path:'/Admin/goods/edit/edit/:id',name:'goods_edit',component:GoodsEdit},

      // 商品栏目
      {path:'/Admin/goods_cat/index',name:'goods_cat_index',component:GoodsCat}, 
      {path:'/Admin/goods_cat/add',name:'goods_cat_add',component:GoodsCatAdd}, 
      {path:'/Admin/goods_cat/edit/:id',name:'goods_cat_edit',component:GoodsCatEdit},

      // 商品品牌
      {path:'/Admin/goods_brand/index',name:'goods_brand_index',component:GoodsBrand}, 
      {path:'/Admin/goods_brand/add',name:'goods_brand_add',component:GoodsBrandAdd}, 
      {path:'/Admin/goods_brand/edit/:id',name:'goods_brand_edit',component:GoodsBrandEdit},

      // 店铺幻灯片
      {path:'/Admin/goods_slide/index',name:'goods_slide_index',component:GoodsSlide}, 
      {path:'/Admin/goods_slide/add',name:'goods_slide_add',component:GoodsSlideAdd}, 
      {path:'/Admin/goods_slide/edit/:id',name:'goods_slide_edit',component:GoodsSlideEdit},

      // 订单列表
      {path:'/Admin/order/index',name:'order_index',component:Order}, 
      {path:'/Admin/order/info/:id',name:'order_info',component:OrderInfo}, 

      // 商品评论
      {path:'/Admin/goods_comment/index',name:'goods_comment_index',component:GoodsComment}, 

      // 售后服务
      {path:'/Admin/goods_server/edit',name:'goods_server_edit',component:GoodsServerEdit}, 

      // 微信公众号
      {path:'/Admin/wechat_cat/index',name:'wechat_cat_index',component:WechatCat}, 
      {path:'/Admin/wechat_cat/add',name:'wechat_cat_add',component:WechatCatAdd}, 
      {path:'/Admin/wechat_cat/edit/:id',name:'wechat_cat_edit',component:WechatCatEdit},

      /****
       * 答题系统
      ***/

      // 年级
      {path:'/Admin/teacher_grade/index',name:'teacher_grade_index',component:TeacherGrade}, 
      {path:'/Admin/teacher_grade/add',name:'teacher_grade_add',component:TeacherGradeAdd}, 
      {path:'/Admin/teacher_grade/edit/:id',name:'teacher_grade_edit',component:TeacherGradeEdit}, 

      // 科目
      {path:'/Admin/teacher_subject/index',name:'teacher_subject_index',component:TeacherSubject}, 
      {path:'/Admin/teacher_subject/add',name:'teacher_subject_add',component:TeacherSubjectAdd}, 
      {path:'/Admin/teacher_subject/edit/:id',name:'teacher_subject_edit',component:TeacherSubjectEdit}, 

      // 材料
      {path:'/Admin/teacher_material/index',name:'teacher_material_index',component:TeacherMaterial}, 
      {path:'/Admin/teacher_material/add',name:'teacher_material_add',component:TeacherMaterialAdd}, 
      {path:'/Admin/teacher_material/edit/:id',name:'teacher_material_edit',component:TeacherMaterialEdit}, 

      // 问题
      {path:'/Admin/teacher_question/index',name:'teacher_question_index',component:TeacherQuestion}, 
      {path:'/Admin/teacher_question/add',name:'teacher_question_add',component:TeacherQuestionAdd}, 
      {path:'/Admin/teacher_question/edit/:id',name:'teacher_question_edit',component:TeacherQuestionEdit}, 


      // 公共题库
      {path:'/Admin/teacher_question_public/index',name:'teacher_question_public_index',component:TeacherQuestionPublic}, 
      {path:'/Admin/teacher_question_public/add',name:'teacher_question_public_add',component:TeacherQuestionPublicAdd}, 
      {path:'/Admin/teacher_question_public/edit/:id',name:'teacher_question_public_edit',component:TeacherQuestionPublicEdit}, 

      // 我的班级
      {path:'/Admin/teacher_class/index',name:'teacher_class_index',component:TeacherClass}, 
      {path:'/Admin/teacher_class/add',name:'teacher_class_add',component:TeacherClassAdd}, 
      {path:'/Admin/teacher_class/edit/:id',name:'teacher_class_edit',component:TeacherClassEdit}, 

      // 我的试卷
      {path:'/Admin/teacher_paper/index',name:'teacher_paper_index',component:TeacherPaper}, 
      {path:'/Admin/teacher_paper/add',name:'teacher_paper_add',component:TeacherPaperAdd}, 
      {path:'/Admin/teacher_paper/edit/:id',name:'teacher_paper_edit',component:TeacherPaperEdit}, 

      {path:'/Admin/list',name:'list',component:List}, // 模版
    ]},
    
  ]
})
