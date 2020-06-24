<template>
    <div>
        <div>导航</div>
        <router-link to="/ly">1.路由--插件Vue Router</router-link>
        <router-link to="/login">2.状态管理--插件Vuex</router-link>
        <router-link to="/basic">3.基础使用</router-link>
        <router-link to="/imgCompress">4.图片压缩</router-link>
        <router-link to="/Rem">5.测试插件postcss-pxtorem</router-link>
        
        <router-link to="/ConfigData">6.选项/数据/...</router-link>
        <router-link to="/ConfigDOM">7.选项/DOM/...</router-link>
        <router-link to="/ConfigCycle">8.选项/生命周期</router-link>
        <router-link to="/ConfigResource">9.选项/资源</router-link>
        <router-link to="/ConfigZuhe">10.选项/组合</router-link>
        <router-link to="/ConfigOthers">11.选项/其它</router-link>
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
        beforeCreate(){
            console.log('0-1-beforeCreate');
        },
        created() {
           console.log('0-2-created');
        },
        beforeMount(){
            console.log('0-3-beforeMount');
        },
        mounted(){
            console.log('0-4-mounted');
        },
        beforeUpdate(){
            console.log('0-5-beforeUpdate');
        },
        updated(){
            console.log('0-6-updated');
        },
        beforeDestroy(){
            console.log('0-7-beforeDestroy');
        },
        destroyed(){
            console.log('0-8-destroyed');
        }
    }
</script>

<style>
    
</style>