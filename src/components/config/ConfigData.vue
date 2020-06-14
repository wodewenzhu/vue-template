<template>
    <div>
       主要包含如下6项：
       <p>1-- data</p> 
       <p>2-- props</p> 
       <p>3-- propsData</p> 
       <p>4-- computed</p> 
       <p>5-- methods</p> 
       <p>6-- watch</p> 
       <div class="show-box">
           <p class="bold">1-- data</p> 
           <p class="bold">类型：Object | Function</p>
           <p class="bold">限制：组件的定义只接受 function</p>
           <p> <span class="bold">问题：</span> 单文件组件中的data选项为什么必须用 function ？</p>
           <p> <span class="bold">答：</span> 因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。</p>
       </div>
       <div class="show-box">
           <p class="bold">2-- props</p> 
           <p><span class="bold">类型：</span>Array | Object</p>
           <p><span class="bold">说明：</span>props 可以是简单的数组（注意：数组的项是字符串类型），或对象（注意：对象允许配置高级选项）</p>
           
           <p><span class="bold">对象可以设置如下4个选项：</span> </p>
           <p>1. type -- 指定数据类型</p>
           <p>2. default -- 指定一个默认值</p>
           <p>3.required -- 指定是否是必传项</p>
           <p>4.validator：Function -- 自定义验证函数</p>
           <p><span class="bold">对象语法，提供验证示例：</span></p>
           <sonDemo :fatherData="demoData"></sonDemo>
           <p><span class="bold">父向子传值推荐用props方式</span></p>
       </div>
       <div class="show-box">
           <p class="bold">3-- propsData</p> 
           <p><span class="bold">类型：</span>{ [key: string]: any }</p>
           <p><span class="bold">限制：</span>只用于 new 创建的实例中。</p>
           
           <p><span class="bold">详情：</span>略...... </p>
       </div>
       <div class="show-box">
           <p class="bold">4-- computed</p> 
           <p><span class="bold">类型：</span>{ [key: string]: Function | { get: Function, set: Function } }</p>
           <p><span class="bold">限制：</span>只用于 new 创建的实例中。</p>
           <p><span class="bold">注意：</span>计算属性里不要使用箭头函数，因为this的指向不是vue实例 </p>
           <p>计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算。</p>
           <p>后面的红色字是计算属性的值： <span class="red">{{percent}}</span></p>
           <p>后面的红色字是计算属性的值2： <span class="red">{{percent2}}: {{num}}</span></p>
       </div>
       <div class="show-box">
           <p class="bold">5-- methods</p> 
           <p><span class="bold">类型：</span>{ [key: string]: Function }</p>
           <p><span class="bold">限制：</span>只用于 new 创建的实例中。</p>
           <p><span class="bold">注意：</span>不应使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。</p>
           <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，</p>
       </div>
       <div class="show-box">
           <p class="bold">6-- watch</p> 
           <p><span class="bold">类型：</span>{ [key: string]: string | Function | Object | Array }</p>
           <p><span class="bold">注意：</span>不应使用箭头函数来定义 watch 里的函数</p>
           <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，</p>
           <button @click="changeName">点击我改变姓名：</button> {{name}}
            <br>
           <button @click="changeAge">点击我改变年龄：</button> {{age}}
       </div>
    </div>
</template>

<script>
    import sonDemo from '../SonDemo';
    export default {
        name: 'app',
        components: {
            sonDemo
        },
        data() {
            return {
                name: '张三',
                age: 20,
                demoData: '我是父传过来的数据',
                num: 6000,
            }
        },
        computed: {
            // 计算属性有两种定义方式，如下 percent 和 percent2
            percent: function() {
                return this.num / 100 + '%'
            },
            // 对get 和 set的定义方式不是太理解
            percent2: {
                get: function() {
                    return this.num + 1;
                },
                set: function(v) {
                    this.num = v - 11;
                },
            }
        },
        watch: {
            // watch里的函数有两种定义方式，如下：
            // 第一种方式，直接传入methods里的函数名
            name: 'setName',
            // 第二种方式，自定义一个函数
            age: function(){
                alert('watch自定义函数方式，生效')
            }
        },
        methods: {
            changeName: function() {
                this.name = '李四'
            },
            setName: function(){
                alert('watch直接传入methods里的函数名，生效')
            },
            changeAge: function(){
                this.age = 30;
            }

        },
        
    }
</script>

<style>
    
</style>