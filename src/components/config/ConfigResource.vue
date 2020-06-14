<template>
    <div id="dm">
       主要包含如下3项：
       <p>1-- directives</p> 
       <p>2-- filters</p> 
       <p>3-- components</p>

       <div class="show-box">
           <p class="bold">1-- directives</p> 
           <p><span class="bold">类型：</span>Object</p>
           <p>用来实现自定义指令</p>
           <p v-aaa>我用来测试自定义指令</p>
       </div>

       <div class="show-box">
           <p class="bold">2-- filters</p> 
           <p><span class="bold">类型：</span>Object</p>
           <p>用来实现自定义过滤器</p>
           <p>通过自定义过滤器格式化数字，如保留两位小数： {{num | twoPoint}}</p>
       </div>

       <div class="show-box">
           <p class="bold">3-- components</p> 
           <p><span class="bold">类型：</span>Object</p>
           <p>用来实现自定义组件</p>
           <p>详情，略......</p>
           <SonDemo></SonDemo>
       </div>

    </div>
</template>

<script>
    import SonDemo from '../SonDemo'
    export default {
        // components 用于实现自定义组件
        components: {
            SonDemo
        },
        data() {
            return {
                num: 3.1425926
            }
        },
        methods: {

        },
        // directives 用户实现自定义指令
        // 这里定义一个局部指令，用于当前组件，当然定义全局指令
        directives: {
            // 这里以自定义指令 v-aaa 为例
            'aaa': function(el, binding){
                // el可以获取当前dom节点，并且进行编译，也可以操作事件
                // binding指的是一个对象，一般不用
                console.log(el, binding);
                el.style.color = 'red';
            }
            
        },
        // filters 用于实现自定义过滤器
        // 这里定义一个局部过滤器，用于当前组件，当然定义全局过滤器
        filters: {
            twoPoint(val){
                return Number(val).toFixed(2);
            }
        }
        
    }
</script>

<style>
    
</style>