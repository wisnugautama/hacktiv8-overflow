import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '', component: () => import('./components/Carousel.vue') },
        { path: '/register', component: () => import('./components/Register.vue') },
        { path: '/login', component: () => import('./components/Login.vue') }
      ]
    },
    {
      path: '/question',
      name: 'question',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Question.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('./views/Forum.vue'),
      children: [
        { path: '', component: () => import('./components/Question.vue') },
        { path: '', component: () => import('./components/AddQuestion.vue') },
        { path: '/forum/question/:id', component: () => import('./components/DetailQuestion.vue') },
        { path: '/forum/question/update/:id', component: () => import('./components/EditQuestion.vue') },
        { path: '/forum/answer/:id', component: () => import('./components/UpdateAnswer.vue') }
      ]
    }
  ]
})
