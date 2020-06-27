<template>
    <div id="dm">
        主要包含如下3项：
        <p>1-- vm.$watch</p>
        <p>2-- vm.$set</p>
        <p>3-- vm.$delete</p>

        <div class="show-box">
            <p class="bold">1-- vm.$watch</p>
            <p><span class="bold">类型：</span>Object</p>
            <p>观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。</p>
            <p><span class="bold">选项：deep</span>，为了发现对象内部值的变化，可以在选项参数中指定 deep: true。</p>
            <p><span class="bold">注意：</span>监听数组的变更不需要设置deep:true</p>
            <p><span class="bold">选项：immediate</span>，在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调，即初始加载数据就会触发一次watch</p>
            <button @click="changeProperty">点击我，修改对象的一个属性</button>
            <br>
            <button @click="changeArr">点击我，修改数组</button>
        </div>

        <div class="show-box">
            <p class="bold">2-- vm.$set</p>
            <p>这是全局 Vue.set 的别名。</p>
            <p>添加对象属性，普通写法是触发不了该对象的watch的，如：this.infos.age = 20</p>
            <p>这时需要就用vm.$set写法，新增属性才能触发watch，即：this.$set.infos.age = 20</p>
            <button @click="addProperty">点击我，新增对象的一个属性</button>
        </div>

        <div class="show-box">
            <p class="bold">3-- vm.$delete</p>
            <p>这是全局 Vue.delete 的别名。</p>
            <p>删除对象属性，普通写法是触发不了该对象的watch的，如：this.infos.age = 20</p>
            <p>这时需要就用vm.$set写法，新增属性才能触发watch，即：this.$set.infos.age = 20</p>
            <button @click="deleteProperty">点击我，删除对象的一个属性</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "",
    props: {
        age: {
            type: Number
        }
    },
    // components 用于实现自定义组件
    components: {},
    data() {
        return {
            infos: {
                name: "张三"
            },
            arr: [1,2]
        };
    },
    watch: {
        infos: {
            handler(newVal, oldVal) {
                console.log("监听对象的watch启动了");
                console.log(newVal, oldVal);
            },
            deep: true,
            immediate: true
        },
        arr: function(newVal, oldVal){
            console.log("监听数组的watch启动了");
            console.log(newVal, oldVal);
        }
    },
    mounted() {},
    methods: {

        // 改变数组
        changeArr(){
            this.arr = [];
        },


        // 1.改变对象的属性值
        changeProperty() {
            this.infos.name = "李四";
            console.log(this.infos);
        },

        // 2.对象添加属性
        // 给对象添加属性，实际上watch是监控不到对象的变化的
        addProperty() {
            // this.infos.age = 20;  // 这种普通写法无法触发watch

            this.$set(this.infos, "age", 30);
            console.log(this.infos);
        },

        // 3.对象删除属性
        // 给对象删除属性，实际上watch是监控不到对象的变化的
        deleteProperty() {
            // delete this.infos.name;  // 这种普通写法无法触发watch

            this.$delete(this.infos, "name");
            console.log(this.infos);
        }
    }
};
</script>

<style>
</style>