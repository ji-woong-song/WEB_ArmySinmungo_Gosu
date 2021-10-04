import Vue from 'vue'
import VueRouter from 'vue-router'
import FreeBoard from '../views/FreeBoard'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/freeBoard',
        name: 'FreeBoard',
        component: FreeBoard
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router