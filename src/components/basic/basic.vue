<template>
    <div class="basic">

        <div class="case-unit">
            <div class="title-unit">计算属性-computed</div>
            <div>原始值：{{originVal}}</div>
            <div>用computed去除原始值的前两位后：{{originValReduce}}</div>
            <button class="btn-unit" @click="changeOriginVal">点击改变原始值</button>
        </div>

        <div class="case-unit">
            <div class="title-unit">侦听器-watch</div>
            <input v-model="inputVal" type="text" placeholder="请输入数字" class="input-unit">
            <div v-if="isError" class="error-tip-unit">错误提示：输入有误。。。</div>
        </div>

        <div class="case-unit">
            <div class="title-unit">绑定 Class 属性</div>
            <div>1.对象方式实现：</div>
            <div>v-bind:class="{ active: isActive, 'text-danger': hasError }"</div><br>
            <div>data: {
                    isActive: true,
                    hasError: false
                  }</div>
            <br><br>
            <div>2.数组方式实现：</div>
            <div>v-bind:class="[activeClass, errorClass]"</div>
            <br>
            <div>data: {
                    activeClass: 'active',
                    errorClass: 'text-danger'
                  }</div>
            <br>
            <div>数组里还可以使用三元表达式</div>
            <br>
            <div>v-bind:class="[isActive ? activeClass : '', errorClass]"</div>
            <br><br>
            <div>3.用在组件上</div>
            <div>当在一个自定义组件上使用 class 属性时，这些 class 将被添加到该组件的根元素上面。</div>
            <div>"《my-component class="baz boo"》《/my-component》"</div>
        </div>

        <div class="case-unit">
                <div class="title-unit">绑定 Style 属性</div>
                
            </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function(){
            return {
                originVal: 'aa优惠券',
                inputVal: '',
                isError: false,
            }
        },
        methods: {
            changeOriginVal(){
                this.originVal = 'bb电影票'
            }
        },
        // 计算属性
        computed: {
            originValReduce: function (){
                // this指向 Vue 实例
                return this.originVal.substr(2);
            }
        },
        // 侦听器
        watch: {
            inputVal: function(newVal, oldVal){
                // this指向 Vue 实例
                let val = Number(newVal);
                if(isNaN(val)){  // 输入的包含非数字
                    this.isError = true
                } else {
                    this.isError = false
                }
            }
        }
    }
</script>

<style>
    .case-unit{
        padding: 20px 30px;
        border-bottom: 1px solid #ccc;
    }
    .title-unit{
        text-align: center;
        font-size: 16px;
        padding: 10px;
    }
    .btn-unit{
        display: block;
        padding: 10px 30px;
        margin: 10px auto;
    }
    .input-unit{
        width: 100%;
        border: 1px solid #999;
        padding: 10px;
    }
    .error-tip-unit{
        color: red;
    }
</style>