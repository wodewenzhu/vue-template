<template>
    <div id="dm">
        主要包含如下3项：
        <p>1-- vm.$data</p>
        <p>2-- vm.$props</p>
        <p>3-- vm.$el</p>
        <p>4-- vm.$options</p>
        <p>5-- vm.$parent</p>
        <p>6-- vm.$root</p>
        <p>7-- vm.$children</p>
        <p>8-- vm.$slots</p>
        <p>9-- vm.$scopedSlots</p>
        <p>10-- vm.$refs</p>
        <p>11-- vm.$isServer</p>
        <p>12-- vm.$attrs</p>
        <p>13-- vm.$listeners</p>

        <div class="show-box">
            <p class="bold">1-- vm.$data</p>
            <p><span class="bold">类型：</span>Object</p>
            <p>Vue 实例观察的数据对象。实例创建之后，可以通过 vm.$data 访问原始数据对象。</p>
            <p>Vue 实例也代理了 data 对象上所有的 property。因此访问 vm.a 等价于访问 vm.$data.a</p>
        </div>

        <div class="show-box">
            <p class="bold">2-- vm.$props</p>
            <p><span class="bold">类型：</span>Object</p>
            <p>当前组件接收到的 props 对象。</p>
            <p>Vue 实例代理了对其 props 对象 property 的访问。因此访问vm.age 等价于访问 vm.$props.age</p>
        </div>

        <div class="show-box">
            <p class="bold">3-- vm.$el</p>
            <p><span class="bold">类型：</span>Element</p>
            <p><span class="bold">限制：</span>只读</p>
            <p>Vue 实例使用的根 DOM 元素。</p>
            <p>vm.$el返回当前组件实例的根元素</p>
        </div>

        <div class="show-box">
            <p class="bold">4-- vm.$options</p>
            <p><span class="bold">限制：</span>只读</p>
            <p><span class="bold">类型：</span>Object</p>
            <p>用于当前 Vue 实例的初始化选项。需要在选项中包含自定义 property 时会有用处：</p>
        </div>

        <div class="show-box">
            <p class="bold">5-- vm.$parent</p>
            <p><span class="bold">类型：</span> Vue instance </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>父实例，如果当前实例有的话。</p>
        </div>

        <div class="show-box">
            <p class="bold">6-- vm.$root</p>
            <p><span class="bold">类型：</span> Vue instance </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。</p>
        </div>

        <div class="show-box">
            <p class="bold">7-- vm.$children</p>
            <p><span class="bold">类型：</span> Vue instance </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>当前实例的直接子组件。</p>
        </div>

        <div class="show-box">
            <p class="bold">8-- vm.$slots</p>
            <p><span class="bold">类型：</span> { [name: string]: ?Array[VNode] } </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>略。。。</p>
        </div>

        <div class="show-box">
            <p class="bold">9-- vm.$scopedSlots</p>
            <p><span class="bold">类型：</span> { [name: string]: props => Array[VNode] | undefined } </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>略。。。</p>
        </div>

        <div class="show-box">
            <p class="bold">10-- vm.$refs</p>
            <p><span class="bold">类型：</span> Object </p>
            <p><span class="bold">限制：</span>只读</p>
            <p ref='aaa'>一个对象，持有注册过 ref 的所有 DOM 元素--用途：可用于获取dom元素</p>
            <p ref='bbb'>一个对象，持有注册过 ref 的所有 组件实例--用途：可用于获取组件实例（如父调用子的事件）</p>
        </div>

        <div class="show-box">
            <p class="bold">11-- vm.$isServer</p>
            <p><span class="bold">类型：</span> boolean </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>当前 Vue 实例是否运行于服务器。</p>
        </div>

        <div class="show-box">
            <p class="bold">12-- vm.$attrs</p>
            <p><span class="bold">类型：</span> { [key: string]: string } </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>在创建更高层次的组件时非常有用，详情-略。。。</p>
        </div>

        <div class="show-box">
            <p class="bold">13-- vm.$listeners</p>
            <p><span class="bold">类型：</span> { [key: string]: Function | Array[Function] } </p>
            <p><span class="bold">限制：</span>只读</p>
            <p>在创建更高层次的组件时非常有用，详情-略。。。</p>
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
            name: "张三"
        };
    },
    mounted(){

        // 1-- vm.$data  (这里的vm代指当前的vue实例)
        // this.$data.name === this.name
        console.log('1-- vm.$data；', this.name === this.$data.name)  // true

        // 1-- 2-- vm.$props
        // this.age === this.$props.age
        console.log('2-- vm.$props：', this.age, this.$props.age, this.age === this.$props.age)  // true

        // 1-- 3-- vm.$el
        // 
        console.log('3-- vm.$el：', this.$el)  // true

        // 1-- 4-- vm.$options
        // 
        console.log('4-- vm.$options：', this.$options)  // true

        // 1-- 5-- vm.$parent
        // 
        console.log('5-- vm.$parent：', this.$parent)  // true

        // 1-- 6-- vm.$root
        // 
        console.log('6-- vm.$root：', this.$root)  // true
        
        // 1-- 7-- vm.$children
        // 
        console.log('7-- vm.$children：', this.$children)  // true

        // 1-- 10-- vm.$refs
        // 
        console.log('10-- vm.$refs：', this.$refs.aaa)  // true
        console.log('10-- vm.$refs：', this.$refs.bbb)  // true

        // 1-- 11-- vm.$isServer
        // 
        console.log('11-- vm.$isServer：', this.$isServer)  // false

        // 1-- 12-- vm.$attrs
        // 
        console.log('12-- vm.$attrs：', this.$attrs)  // false

        // 1-- 13-- vm.$listeners
        // 
        console.log('13-- vm.$listeners：', this.$listeners)  // false
    }


};
</script>

<style>
</style>