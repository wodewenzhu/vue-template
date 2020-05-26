<template>
    <div class="welcome">
        <div class="word">欢迎 {{name}} 回来</div>
        <router-link to="/login" class="btn">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            
        },
        created() {
            this.name = this.$store.state.name
        },
        mounted() {
            
        }
    }
</script>

<style>
    .welcome{
        font-size: 1.6rem;
        text-align: center;
    }
    .welcome .word{
        margin: 10rem 0 30rem;
    }
    .welcome .btn{
        width: 36%;
        height: 4rem;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        background: skyblue;
        color: #fff;
        margin: 0 auto;
        border-radius: 0.3rem;
    }
</style>