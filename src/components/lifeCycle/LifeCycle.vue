<template>
    <div>
        <div>vue父子组件生命周期执行顺序</div>
        <Basic></Basic>
    </div>
</template>

<script>
    import Basic from '../basic/basic.vue'
    export default {
        name: 'app',
        components: {
            Basic
        },
        data() {
            return {
                name: 111
            }
        },
        methods: {
            
        },
        beforeCreate(){

        },
        created() {
           
        },
        beforeMount(){

        },
        mounted(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeDestroy(){

        },
        destroyed(){

        }
    }
</script>

<style>
    
</style>