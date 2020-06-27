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


// API--选项
import ConfigData from            './../components/config/ConfigData.vue'
import ConfigDOM from             './../components/config/ConfigDOM.vue'
import ConfigCycle from           './../components/config/ConfigCycle.vue'
import ConfigResource from        './../components/config/ConfigResource.vue'
import ConfigZuhe from            './../components/config/ConfigZuhe.vue'
import ConfigOthers from          './../components/config/ConfigOthers.vue'

// API--实例
import ShiliProperty from          './../components/config/ShiliProperty.vue'
import ShiliData from          './../components/config/ShiliData.vue'
import ShiliEvent from          './../components/config/ShiliEvent.vue'
import ShiliLifestyle from          './../components/config/ShiliLifestyle.vue'


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
    },

    // API配置项
    {
        path: '/ConfigData',
        component: ConfigData
    },
    {
        path: '/ConfigDOM',
        component: ConfigDOM
    },
    {
        path: '/ConfigCycle',
        component: ConfigCycle
    },
    {
        path: '/ConfigResource',
        component: ConfigResource
    },
    {
        path: '/ConfigZuhe',
        component: ConfigZuhe
    },
    {
        path: '/ConfigOthers',
        component: ConfigOthers
    },
    {
        path: '/ShiliProperty',
        component: ShiliProperty
    },
    {
        path: '/ShiliData',
        component: ShiliData
    },
    {
        path: '/ShiliEvent',
        component: ShiliEvent
    },
    {
        path: '/ShiliLifestyle',
        component: ShiliLifestyle
    },
    
]

const router = new VueRouter({
    routes
})

export default router