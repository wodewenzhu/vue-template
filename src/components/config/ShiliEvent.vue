<template>
    <div id="dm">
        主要包含如下3项：
        <p>1-- vm.$on( event, callback )</p>
        <p>2-- vm.$once( event, callback )</p>
        <p>3-- vm.$off( [event, callback] )</p>
        <p>4-- vm.$emit( eventName, […args] )</p>

        <div class="show-box">
            <p class="bold">1-- vm.$on</p>
            <p><span class="bold">用法：</span>监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。</p>
            <p>回调函数会接收所有传入事件触发函数的额外参数。</p>
            <button @click="startUp">点击我，触发vm.$on自定义事件</button>
        </div>

        <div class="show-box">
            <p class="bold">2-- vm.$once</p>
            <p><span class="bold">用法：</span>监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。</p>
            <button @click="startUp2">点击我，触发vm.$once自定义事件</button>
        </div>

        <div class="show-box">
            <p class="bold">3-- vm.$off</p>
            <p><span class="bold">用法：</span>移除自定义事件监听器。</p>
            <p>注意：如果没有提供参数，则移除所有的事件监听器；</p>
            <button @click="startUp3">点击我，移除自定义事件：aaa</button>
            <br>
            <button @click="startUp4">点击我，移除所有的自定义事件</button>
        </div>

        <div class="show-box">
            <p class="bold">4-- vm.$emit</p>
            <p><span class="bold">用法：</span>触发当前实例上的事件。附加参数都会传给监听器回调。</p>

        </div>

        <div style="display:none">
            <SonDemo ref="son"></SonDemo>
        </div>

        <button @click="startUp5">点击我，触发子组件定义的事件</button>


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