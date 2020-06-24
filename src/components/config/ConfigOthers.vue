<template>
    <div id="dm">
       主要包含如下3项：
       <p>1-- parent</p> 
       <p>2-- mixins</p> 
       <p>3-- extends</p>
       <p>4-- provide/inject</p>

       <div class="show-box">
           <p class="bold">1-- parent</p> 
           <p><span class="bold">类型：</span>Vue instance</p>
           <p><span class="bold">详细：</span>指定已创建的实例之父实例，在两者之间建立父子关系。</p>
           <p>子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。</p>
           <p>节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信</p>
           <p>网上介绍资料较少，很少使用，略......</p>
       </div>

       <div class="show-box">
           <p class="bold">2-- mixins</p> 
           <p><span class="bold">类型：</span>Array[Object]</p>
           <p><span class="bold">详细：</span>mixins 选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到最终的选项中</p>
           <p>就是说，如果你的混入包含一个 created 钩子，而创建组件本身也有一个，那么两个函数都会被调用。</p>
           <p>Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。</p>
       </div>

       <div class="show-box">
           <p class="bold">3-- extends</p> 
           <p><span class="bold">类型：</span>Object | Function</p>
           <p><span class="bold">详细：</span>允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)</p>
           <p>这主要是为了便于扩展单文件组件。</p>
           <p>这和 上面的mixins 类似。</p>
           <p>extends和mixins类似，通过暴露一个extends对象到组件中使用。</p>
           <p>extends会比mixins先执行。执行顺序：extends  > mixins > 组件自身</p>
       </div>

       <div class="show-box">
           <p class="bold">4-- provide/inject</p> 
           <p><span class="bold">类型：</span>provide：Object | () => Object</p>
           <p><span class="bold">类型：</span>inject：Array[string] | { [key: string]: string | Symbol | Object }</p>
           <p><span class="bold">详细：</span>provide 和 inject 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中</p>
           <p>这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，</p>
           <p><span class="bold">不论组件层次有多深，</span>并在起上下游关系成立的时间里始终生效。</p>
           <p>provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的 property。</p>
           <p>extends会比mixins先执行。执行顺序：extends  > mixins > 组件自身</p>
           <br>
           <p>例如：</p>
           <p>// 祖先组件  
               export default {
                    provide: {
                        name: 'lee'
                    }
                }
            </p>
            <p>// 后代  组件  
                export default {
                    inject: ['name'],
                    mounted () {
                        console.log(this.name);  // lee
                    }
                }
            </p>
            <br>
            <p><span class="bold">提示：</span>provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。</p>
            <p>所以用它们进行组件间传值并不好用</p>
       </div>


    </div>
</template>

<script>
    export default {
        // components 用于实现自定义组件
        components: {
            
        },
        data() {
            return {
                num: 3.1425926
            }
        },
        methods: {

        },
        created(){
            console.log(0)
        },
        mounted(){
           console.log(111) 
        }, 
        parent: function(){

        },
        mixins: [
            {
                // mixins里的mounted要比组件自身的mounted先执行，其它选项也是如此
                mounted() {
                    console.log(222)
                }
            }
        ],
        extends: {
            // extends 里的mounted要比 mixins 的mounted先执行
            mounted() {
                console.log(333)
            }
        }
        
    }
</script>

<style>
    
</style>