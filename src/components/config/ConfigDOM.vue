<template>
    <div id="dm">
       主要包含如下6项：
       <p>1-- el</p> 
       <p>2-- template</p> 
       <p>3-- render</p> 
       <p>4-- renderError</p>
       <div class="show-box">
           <p class="bold">1-- el</p> 
           <p><span class="bold">类型：</span>string | Element</p>
           <p><span class="bold">限制：</span>只在用 new 创建实例时生效。</p>
           <p>在实例挂载之后，元素可以用 vm.$el 访问。</p>
       </div>
       <div class="show-box">
           <p class="bold">2-- template</p> 
           <p><span class="bold">类型：</span>string</p>
           <p>一个字符串模板作为 Vue 实例的标识使用。详情，略......</p>
       </div>
       <div class="show-box">
           <p class="bold">3-- render</p> 
           <p><span class="bold">类型：</span>(createElement: () => VNode) => VNode</p>
           <p>字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。</p>
       </div>
       <div class="show-box">
           <p class="bold">4-- renderError</p> 
           <p><span class="bold">类型：</span>(createElement: () => VNode, error: Error) => VNode</p>
           <p>当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError。</p>
           <p>只在开发者环境下工作。详情：略......</p>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {

        },
        mounted(){
            // 通过 this.$el 可以获取本组件的根元素对象 等价于 document.getElementById('dm')
            console.log(this.$el === document.getElementById('dm'));  // 返回 true
            
        }
        
    }
</script>

<style>
    
</style>