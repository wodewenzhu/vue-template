<template>
    <div class="show-box luyou-dongtai">
        <div>动态路由</div>
        <div>用户名：{{user}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: ''
            }
        },
        created() {
            this.getUserName();
        },
        methods: {
            getUserName() {
                this.user = (this.$route.params.name).slice(1);
            }
        },
        watch: {
            $route: function() {
                this.getUserName();
            }
        }

    }
</script>

<style>
    .luyou-dongtai{
        min-height: 3rem;
        border: 1px solid #999;
        border-radius: 0.6rem;
        overflow: hidden;
        padding: 1rem;
    }
</style>