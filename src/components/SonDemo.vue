<template>
    <div class="son_demo">
        红框里是一个子组件
        <div>姓名：{{name}}</div>
        <button id="btn"
            @click="changeName">按钮--点击我改变子组件数据</button>

        <div>验证prop数据流：{{fatherData}}</div>
    </div>
</template>

<script>
export default {
    name: 'SonDemo',
    props: {
        fatherData: {
            // type定义数据类型
            type: String,
            // default 定义一个默认值
            default: '我是默认值',
            // required定义是否是必传项
            required: false,
            // validator 自定义验证函数
            validator: function(val){
                // 如果该函数返回一个 falsy 的值 (即验证失败)，控制台警告将会被抛出。
                return typeof val === 'string';
            }
        }
    },
    data() {
        return {
            name: "张三"
        };
    },
    methods: {
        changeName() {
            this.name = "李四";
        },
        ddd(){
            console.log('我是子组件定义的方法，执行了')
        }
    },
    beforeCreate() {
        console.log("2-1-beforeCreate");
    },
    created() {
        console.log("2-2-created");
    },
    beforeMount() {
        console.log("2-3-beforeMount");
    },
    mounted() {
        console.log("2-4-mounted");
    },
    beforeUpdate() {
        console.log("2-5-beforeUpdate");
    },
    updated() {
        console.log("2-6-updated");
    },
    beforeDestroy() {
        console.log("2-7-beforeDestroy");
    },
    destroyed() {
        console.log("2-8-destroyed");
    }
};
</script>

<style scoped>
    .son_demo{
        border: 1px solid red;
    }
</style>