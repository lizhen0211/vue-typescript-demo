<template>
    <div>
        <div class="thispage">我是本页的top</div>
        <!-- 静态赋值 <blog-post title="My journey with Vue"></blog-post>-->

        <!-- prop 可以通过 v-bind 动态赋值-->
        <!-- 动态赋予一个变量的值 -->
        <!--<blog-post v-bind:title="post.title"></blog-post>-->

        <!-- 动态赋予一个复杂表达式的值 -->
        <!--<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>-->

        <!-- 传入一个数字-->
        <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->

        <!--传入一个布尔值-->
        <!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
        <!--<blog-post is-published></blog-post>-->
        <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->

        <!--传入一个数组-->
        <!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
        <!--<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>-->
        <!-- 用一个变量进行动态赋值。-->
        <!-- <blog-post v-bind:comment-ids="post.commentIds"></blog-post>-->

        <!--传入一个对象-->
        <!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->

        <!--<blog-post v-bind:author="{name: 'Veronica',company: 'Veridian Dynamics'}"></blog-post>-->

        <!-- 用一个变量进行动态赋值。-->
        <!--<blog-post v-bind:author="post.author"></blog-post>-->

        <hello-panel v-bind:str="'传入一个字符串：'+pagetitle" v-bind:arrs="pageArray" v-bind:num="'传入一个数字：'+pagenum"
                     v-bind:bool="'传入一个布尔值：'+pagebool" v-bind:model="this.pageObject"
                     v-bind:defaultField="'子组件默认值以在此覆盖'" v-bind:requiredField="'我是一个必填字段：'+pageRequired"></hello-panel>

        <div class="thispage">我是本页的bottom</div>
    </div>
</template>

<script lang="ts" src="./cuscomponent.ts">

</script>

<style scoped>
    @import "./cuscomponent.css";
</style>