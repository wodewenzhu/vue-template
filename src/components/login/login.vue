<template>
    <div class="login">
        <div>请登录</div>
        <input v-model="name" type="text" placeholder="请输入用户名">
        <div @click="goWelcome" v-bind:class="['btn', {'unable': !isActive}]">登录</div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                name: '',
                isActive: false
            }
        },
        watch: {
            name(newVal, oldVal) {
                if (newVal !== '') {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            } 
        },
        methods: {
            goWelcome() {
                this.$store.commit('setName', (this.name));
                this.$router.push({path: '/welcome'});
            }
        },
        created() {
            this.name = this.$store.state.name;
        }
    }
</script>

<style scoped>
    .login{
        font-size: 1.5rem;
        text-align: center
    }
    .login input{
        display: block;
        width: 100%;
        height: 3.6rem;
        /* line-height: 36px; */
        padding: 0 1rem;
        border: 1px solid #999;
        border-radius: 0.3rem;
        overflow: hidden;
        margin: 2rem auto;
        color: #666;
        font-size: 1.6rem;
    }
    .login .btn{
        width: 36%;
        height: 4rem;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        background: skyblue;
        color: #fff;
        margin: 10rem auto 0;
        border-radius: 0.3rem;
    }
    .login .btn.unable{
        opacity: 0.4;
        pointer-events: none;
    }
</style>