<template>
    <div>
        <div>插值：</div>
        <span>Message: {{ msg }}</span>
        <hr>
        <div>文本插值：</div>
        <hr>
        <div>原始HTML：</div>
        <p>双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html</p>
        <div>Using v-html directive: <span v-html="rawHtml"></span></div>
        <p>你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。</p>
        <hr>
        <div>Attribute：</div>
        <p>Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令：</p>
        <div v-bind:id="dynamicId">我被绑定ID，id值被绑定为bindID,颜色被渲染成红色</div>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        <p>如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled attribute 甚至不会被包含在渲染出来的
            button 元素中。
        </p>
        <hr>
        <div>使用 JavaScript 表达式：</div>
        <p>"{ { number + 1 } }"</p>
        <p>"{ { ok ? 'YES' : 'NO' } }"</p>
        <p>"{ { message.split('').reverse().join('') } }"</p>
        <p>" < div v-bind:id="'list-' + id">< /div> "</p>
        <hr>
    </div>

</template>

<script lang="ts" src="./template.ts">

</script>

<style scoped>
    @import "./template.css";
</style>