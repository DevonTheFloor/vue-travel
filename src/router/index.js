import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: ()=> import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: ()=> import(/* webpackChunkName: "experienceDetails" */'../views/ExperienceDetails.vue')
      }
    ],
    beforEnter: (to, from, next) => {
      const exist = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    },

  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: ()=> import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
