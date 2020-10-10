// import Vue from 'vue'
// import VueRouter from 'vue-router'

const Home = () => import('views/Home')
const Article = () => import('views/Article')
const Friends = () => import('views/Friends')
const Search = () => import('views/Search')
const About = () => import('views/About')
const Contact = () => import('views/Contact')
const NotFound = () => import('views/NotFound')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }, {
    path: '*', // 此处需特别注意置于最底部
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
