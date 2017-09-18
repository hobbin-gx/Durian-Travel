import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Aim from '@/components/aim'
import Like from '@/components/like'
import Trip from '@/components/trip'
import Mine from '@/components/mine'
import SelectAim from '@/components/selectAim'
import Login from '@/components/login'
import Register from '@/components/register'
import HistoryTrip from '@/components/historytrip'


Vue.use(Router)

export default new Router({
  mode : 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
    	path : '/aim',
    	component : Aim
    },
    {
    	path : '/like',
    	component : Like
    },
    {
    	path : '/trip',
    	component : Trip
    },
    {
    	path : '/mine',
    	component : Mine
    },
    {
    	path : '/',
    	redirect : '/aim'
    },
    {
    	path : '/selectAim',
    	component : SelectAim
    },
    {
    	path : '/login',
    	component : Login
    },
    {
    	path : '/register',
    	component: Register
    },
    {
        path : '/historytrip',
        component : HistoryTrip
    }
  ]
})
