<template>
    <div>
        <div class="item">
            <div class="title">一、【父组件】初次加载的执行顺序如下：</div>
            <ul>
                <li>1-1-beforeCreate</li>
                <li>1-2-created</li>
                <li>1-3-beforeMount</li>
                <li>1-4-mounted</li>
            </ul>
        </div>

        <div class="item">
            <div class="title">二、【父组件 + 子组件】初次加载的执行顺序如下：</div>
            <ul>
                <li>1-1-beforeCreate</li>
                <li>1-2-created</li>
                <li>1-3-beforeMount</li>
                <li>2-1-beforeCreate</li>
                <li>2-2-created</li>
                <li>2-3-beforeMount</li>
                <li>2-4-mounted</li>
                <li>1-4-mounted</li>
            </ul>
            <br><br>
            <!-- 这里引入一个子组件 -->
            <SonDemo></SonDemo>
        </div>

        <div class="item">
            <div class="title">三、【父组件】更新数据后的执行顺序如下：</div>
            <ul>
                <li>1-5-beforeUpdate</li>
                <li>1-5-beforeUpdate</li>
            </ul>

            <br><br>
            <div>年龄：{{age}}</div>
            <button @click="changeAge">按钮--点击改变父组件绑定的数据</button>
        </div>

        <div class="item">
            <div class="title">四、【子组件】更新数据后的执行顺序如下：</div>
            <ul>
                <li>2-5-beforeUpdate</li>
                <li>2-6-updated</li>
            </ul>

            <br><br>
            <div>年龄：{{age}}</div>
            <button @click="changeAge">按钮--点击改变父组件绑定的数据</button>
        </div>

        <div class="item">
            <div class="title">五、【从该父组件跳转到其它路由】的执行顺序如下：</div>
            <ul>
                <li>0-1-beforeCreate</li>
                <li>0-2-created</li>
                <li>0-3-beforeMount</li>
                <li>1-7-beforeDestroy</li>
                <li>2-7-beforeDestroy</li>
                <li>2-8-destroyed</li>
                <li>1-8-destroyed</li>
                <li>0-4-mounted</li>
            </ul>
            <div>可以看出，首先创建新路由对应实例的相关数据，然后开始销毁子组件，然后再销毁父组件，最后挂载新路由对应的实例</div>
        </div>
        
    </div>
</template>

<script>
    import SonDemo from '../SonDemo.vue'
    export default {
        name: '',
        components: {
            SonDemo
        },
        data() {
            return {
                age: 0,
            }
        },
        methods: {
            changeAge(){
                this.age = 20;
            }
        },
        beforeCreate(){
            console.log('1-1-beforeCreate');
        },
        created() {
           console.log('1-2-created');
        },
        beforeMount(){
            console.log('1-3-beforeMount');
        },
        mounted(){
            console.log('1-4-mounted');
        },
        beforeUpdate(){
            console.log('1-5-beforeUpdate');
        },
        updated(){
            console.log('1-6-updated');
        },
        beforeDestroy(){
            console.log('1-7-beforeDestroy');
        },
        destroyed(){
            console.log('1-8-destroyed');
        }
    }
</script>

<style scoped>
    .item{
        font-size: 36px;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        margin: 15px 0;
    }
    .title{
        font-size: 38px;
        color: blue;
    }
</style>>