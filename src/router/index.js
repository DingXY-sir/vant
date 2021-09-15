import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('views/login/index');
const Tabbar = () => import('components/common/tabbar');
//
const Home = () => import('views/tabbar-subpage/home');
const ProFlie = () => import('views/tabbar-subpage/proflie');
const Video = () => import('views/tabbar-subpage/video');
const Qa = () => import('views/tabbar-subpage/qa');
const Search = () => import('views/tabbar-subpage/search/index')
const routes = [
 {name:'login', path:'/login', component:Login},
 {
   path:'/', 
   component:Tabbar,
   children:[
     {name:'home', path:'', component:Home},
     {name:'proflie', path:'/proflie', component:ProFlie},
     {name:'video', path:'/video', component:Video},
     {name:'qa', path:'/qa', component:Qa},
   ]
 },
 {name:'search', path:'/search', component:Search}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
