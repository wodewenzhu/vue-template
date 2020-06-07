<template>
    <div>
        <div>导航</div>
        <router-link to="/ly">1.路由--插件Vue Router</router-link>
        <router-link to="/login">2.状态管理--插件Vuex</router-link>
        <router-link to="/basic">3.基础使用</router-link>
        <router-link to="/imgCompress">4.图片压缩</router-link>
        <router-link to="/Rem">5.测试插件postcss-pxtorem</router-link>
        <router-link to="/LifeCycle">6.父子组件生命周期执行顺序</router-link>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                name: 111
            }
        },
        methods: {
            
        },
        created() {
           
        }
    }
</script>

<style>
    
</style>