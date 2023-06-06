import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/home', // 默认显示首页的二级路由
    children: [
      {
        path: 'home',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/gis',
    component: () => import('@/views/gis')
  },
  {
    path: '/camera',
    component: () => import('@/views/camera')
  },
  {
    path: '/charts',
    component: () => import('@/views/charts')
  },
  {
    path: '/skylight',
    component: () => import('@/views/skylight')
  },
  {
    path: '/import',
    component: () => import('@/views/excel/import')
  },
  {
    path: '/export',
    component: () => import('@/views/excel/export')
  },
  {
    path: '/cate', // 天窗管理分类
    component: () => import('@/views/skylight/cate')
  },
  {
    path: '/plan', // 天窗管理列表
    component: () => import('@/views/skylight/plan')
  },
  {
    path: '/reg',
    component: () => import('@/views/register')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

// 无需验证token的页面
const whiteList = ['/login', '/reg', '/home', '/camera', '/charts', '/import', '/export']

router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (token) {
    if (!store.state.userInfo.username) {
      store.dispatch('initUserInfo')
    }
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
