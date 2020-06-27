<template>
    <div id="dm">
        主要包含如下3项：
        <p>1-- vm.$mount( [elementOrSelector] )</p>
        <p>2-- vm.$forceUpdate()</p>
        <p>3-- vm.$nextTick( [callback] )</p>
        <p>4-- vm.$destroy()</p>

        <div class="show-box">
            <p class="bold">1-- vm.$mount()</p>
            <p><span class="bold">用法：</span>可以使用 vm.$mount() 手动地挂载一个未挂载的实例</p>
            <p>new MyComponent().$mount('#app') 等价于 new MyComponent({ el: '#app' })</p>
        </div>


    </div>
</template>

<script>
import SonDemo from '../SonDemo'
export default {
    name: "",
    // components 用于实现自定义组件
    components: {
        SonDemo
    },
    data() {
        return {
            infos: {
                name: "张三"
            },
            arr: [1,2]
        };
    },
    mounted() {
        // 自定义事件要在 mounted 生命周期定义
        // 通过 vm.$on 自定义一个事件
        this.$on('aaa', function(val){
            console.log(val)
        })

        this.$once('bbb', function(val){
            console.log(val)
        })
    },
    methods: {

        // vm.$on 自定义事件
        startUp(){
            this.$emit('aaa', '111')
        },

        // vm.$once自定义一次性事件
        startUp2(){
            this.$emit('bbb', '222')
        },

        // vm.$off移除自定义事件监听器：aaa
        startUp3(){
            this.$off('aaa')
        },

        // vm.$off移除自定义所有的事件监听器
        startUp4(){
            this.$off()
        },


        

        // 触发子组件定义的事件
        startUp5(){
            this.$refs.son.ddd()
            // console.log(this.$refs.son)
        },


    }
};
</script>

<style>
</style>