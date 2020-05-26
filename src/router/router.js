import Vue from 'vue'
import VueRouter from 'vue-router'

import nav from './../components/nav.vue'
import ly from './../components/aboutRouter/ly.vue'

import lyDongtai from './../components/aboutRouter/lyDongtai.vue'
import lyQiantao from './../components/aboutRouter/lyQiantao.vue'
import lyQiantaoChild from './../components/aboutRouter/lyQiantaoChild.vue'
import lyName from './../components/aboutRouter/lyName.vue'
import lyBiancheng from './../components/aboutRouter/lyBiancheng.vue'

import login from './../components/login/login.vue'
import welcome from './../components/login/welcome.vue'

import basic from './../components/basic/basic.vue'
import Rem from './../components/rem/Rem.vue'


Vue.use(VueRouter)

const routes = [
    
    // 重定向
    {
        path: '/',
        redirect: '/nav'
    },
    {
        path: '/nav',
        component: nav
    },
    {
        path: '/ly',
        component: ly
    },
    // 【1.动态路由】，参数以冒号开头
    {
        path: '/lyDT:name',
        component: lyDongtai
    },
    // 【2.嵌套路由】
    {
        path: '/lyQT',
        component: lyQiantao,
        children: [
            {
                path: 'QiantaoChild',
                component: lyQiantaoChild
            }
        ]
    },
    // 【3.动态路由】
    {
        path: '/lyName',
        component: lyName,
        name: 'lyName'
    },
    // 【4.编程式路由】
    {
        path: '/lyBiancheng',
        component: lyBiancheng
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/welcome',
        component: welcome
    },
    {
        path: '/basic',
        component: basic
    },
    {
        path: '/Rem',
        component: Rem
    }
    
]

const router = new VueRouter({
    routes
})

export default router