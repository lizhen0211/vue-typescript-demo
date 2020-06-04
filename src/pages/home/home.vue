<template>
    <div>
        <button v-on:click="onSimpleDemoClick">一个简单的例子</button>
        <button v-on:click="onLifeCycleClick">生命周期</button>
        <button v-on:click="onTemplateClick">模板语法</button>
        <button v-on:click="onTemplate2Click">模板语法2</button>
        <button v-on:click="onComputedClick">计算属性</button>
        <button v-on:click="onListClick">列表渲染</button>
        <button v-on:click="onFormClick">表单输入</button>
        <button>一个简单的例子</button>
        <button>一个简单的例子</button>
        <button v-on:click="onCusComponentClick">自定义组件</button>
        <button v-on:click="onScrollClick">滚动组件</button>
    </div>

</template>

<script lang="ts" src="./home.ts">

</script>

<style scoped>
    @import "./home.css";
</style>