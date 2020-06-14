<template>
    <div>
        <div>路由</div>
        <router-link :to="user" @click.native="setUserParams">1.动态路由</router-link>
        <router-link to="/lyQT/QiantaoChild">2.嵌套路由</router-link>
        <router-link :to="{name: 'lyName', params: { userId: 123 }}">3.命名路由(可带参数)</router-link>
        <div @click="LyBianCheng">4.编程式路由</div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                timer: null,
                user: ''
            }
        },
        methods: {
            //获取一个  0-9  的随机整数
            getRandom() {
            return Math.floor((Math.random())*10);
            },
            // 生成并设置一个动态路由的随机参数
            setUserParams() {
            this.user = '/lyDT:name' + ((this.getRandom()) * 36);
            },
            // 编程式路由实现
            LyBianCheng() {
                this.$router.push({path:'/lyBiancheng'})
            }
        },
        created() {
            this.setUserParams();
        },
        mounted() {
            window.onpopstate = function(){
                alert('路由发生变化')
            }
            this.timer = setInterval(() => {
                console.log('我是一个定时器')
            }, 1000)
        },
        beforeDestroy(){
            // 某个组件若使用了定时器的话，那么在该组件销毁前记得清除定时器
            // 因为定时器是全局变量window的属性，不清除的话，会在其它路由中继续执行
            clearInterval(this.timer)
        }
    }
</script>

<style>
    
</style>