<template>
    <div>
        <div class="rem_box">前端开发中还原设计图的重要性毋庸置疑，目前来说应用最多的应该也还是使用rem。</div>
        <div class="rem_box">然而很多人依然还是处于刀耕火种的时代，要么自己去计算rem值，要么依靠编辑器安装插件转换。</div>
        <div class="rem_box small">而本文的目标就是通过一系列的配置后，在开发中可以直接使用设计图的尺寸开发，项目为我们自动编译，转换成rem。</div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        created() {
           
        }
    }
</script>



<style scoped>
/* 你可以在一个组件中同时使用有 scoped 和非 scoped 样式： */
    .rem_box{
        font-size: 32px;
    }
</style>

<style>
/* 你可以在一个组件中同时使用有 scoped 和非 scoped 样式： */
    .small{
        font-size: 12px;
        color: blue;
    }
</style>