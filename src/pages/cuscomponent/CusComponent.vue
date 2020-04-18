<template>
    <div>
        <div class="thispage">我是本页的内容</div>
        <!-- 静态赋值 <blog-post title="My journey with Vue"></blog-post>-->

        <!-- prop 可以通过 v-bind 动态赋值-->
        <!-- 动态赋予一个变量的值 -->
        <!--<blog-post v-bind:title="post.title"></blog-post>-->

        <!-- 动态赋予一个复杂表达式的值 -->
        <!--<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>-->

        <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->

        <hello-panel v-bind:str="pagetitle" v-bind:items="pagelistItem" v-bind:num="pagenum"></hello-panel>

        <div class="thispage">我是本页的内容</div>
    </div>
</template>

<script lang="ts" src="./cuscomponent.ts">

</script>

<style scoped>
    @import "./cuscomponent.css";
</style>