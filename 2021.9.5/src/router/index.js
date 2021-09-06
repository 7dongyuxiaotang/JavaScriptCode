//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1、通过Vue.use(插件)
Vue.use(VueRouter)

//2、创建路由对象
const routes =[
  {
    path:'/',
    //重定向
    redirect:'home'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/',
        redirect:'news'
      },
      {
        path:'news',
        component: HomeNews
      },
      {
        path:'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user/:userId',
    component:User
  },
  {
    path:'/profile',
    component:Profile
  }

]


const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

//3、将router挂载到vue实例中
export default router