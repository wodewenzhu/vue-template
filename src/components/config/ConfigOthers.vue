<template>
    <div id="dm">
        主要包含如下3项：
        <p>1-- name</p>
        <p>2-- delimiters</p>
        <p>3-- functional</p>
        <p>4-- model</p>
        <p>5-- inheritAttrs</p>
        <p>6-- comments</p>

        <div class="show-box">
            <p class="bold">1-- name</p>
            <p><span class="bold">类型：</span>string</p>
            <p><span class="bold">限制：</span>只有作为组件选项时起作用</p>
            <p>允许组件模板递归地调用自身。组件 ID 自动作为组件的 name</p>
            <p>指定 name 选项的另一个好处是便于调试。有名字的组件有更友好的警告信息。</p>
            <p>有 vue-devtools，未命名组件将显示【AnonymousComponent】，无语义。有 name 选项，可以获得更有语义信息的组件树。</p>
        </div>

        <div class="show-box">
            <p class="bold">2-- delimiters </p>
            <p><span class="bold">类型：</span>Array[string]</p>
            <p><span class="bold">限制：</span>只在完整构建版本中的浏览器内编译时可用。</p>
            <p>改变我们插值的符号（默认是用双花括号{{}}）</p>
            <p>这里用小括号插入的值，示例：(name)。。发现无效，注意看上面的限制</p>
            <p>讲真，目前还觉得没有使用价值。。。</p>
        </div>

        <div class="show-box">
            <p class="bold">3-- functional </p>
            <p><span class="bold">类型：</span>boolean</p>
            <p>使组件无状态 (没有 data) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使它们渲染的代价更小。</p>
            <p>略。。。</p>
        </div>

        <div class="show-box">
            <p class="bold">4-- model </p>
            <p>详情：略。。。</p>
            <p>参考链接：https://blog.csdn.net/liu_jun_tao/article/details/90232658</p>
        </div>

        <div class="show-box">
            <p class="bold">5-- inheritAttrs </p>
            <p>详情：略。。。</p>
            <p>参考链接：https://www.jianshu.com/p/ce8ca875c337</p>
        </div>

        <div class="show-box">
            <p class="bold">6-- comments </p>
            <p><span class="bold">类型：</span>boolean</p>
            <p><span class="bold">限制：</span>只在完整构建版本中的浏览器内编译时可用。</p>
            <p>当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。</p>
            <p>讲真，目前还觉得没有使用价值。。。</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "",
    // components 用于实现自定义组件
    components: {},
    data() {
        return {
            name: "张三"
        };
    },

    delimiters: ["(", ")"],

    comments: true,

};
</script>

<style>
</style>