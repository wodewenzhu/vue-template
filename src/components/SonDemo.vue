<template>
    <div>
        我是一个子组件的demo
        <div>姓名：{{name}}</div>
        <button @click="changeName">按钮--点击我改变子组件数据</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               name: '张三' 
            }
        },
        methods: {
            changeName(){
                this.name = '李四'
            }
        },
        beforeCreate(){
            console.log('2-1-beforeCreate');
        },
        created() {
           console.log('2-2-created');
        },
        beforeMount(){
            console.log('2-3-beforeMount');
        },
        mounted(){
            console.log('2-4-mounted');
        },
        beforeUpdate(){
            console.log('2-5-beforeUpdate');
        },
        updated(){
            console.log('2-6-updated');
        },
        beforeDestroy(){
            console.log('2-7-beforeDestroy');
        },
        destroyed(){
            console.log('2-8-destroyed');
        }
    }
</script>