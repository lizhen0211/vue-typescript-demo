<template>
    <div>
        <div class="title">指令</div>
        <div class="content">
            <p style="text-indent: 20px">动态参数</p>
            <p>从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：</p>
            <!--注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。-->
            <a v-bind:[attributeName]="url"> 点击跳转到对应连接 </a>
            <p>这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。</p>
        </div>
        <div>
            <div class="title">对动态参数的值的约束</div>
            <div class="content">
                <p>动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。</p>
            </div>
        </div>
        <div>
            <div class="title">对动态参数表达式的约束</div>
            <div class="content">
                <p>动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：</p>
                <!-- 这会触发一个编译警告 -->
                <!--<a v-bind:['foo' + bar]="value"> ... </a>-->
                <p>变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</p>
            </div>
        </div>
        <div>
            <div class="title">修饰符</div>
            <div class="content">
                <p>修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
                    例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：</p>
                <form v-on:submit.prevent="onSubmit">...</form>
            </div>
        </div>
        <div>
            <div class="title">缩写</div>
            <div class="content">
                <p>v-bind 缩写</p>
                <!-- 完整语法 -->
                <div v-bind:href="url">vbind href</div>

                <!-- 缩写 -->
                <a :href="url">:href</a>

                <!-- 动态参数的缩写 (2.6.0+) -->
                <a :[key]="url"> :key </a>
            </div>
        </div>
        <div>
            <div class="title">v-on 缩写</div>
            <div class="content">
                <!-- 完整语法 -->
                <a v-on:click="doSomething">v-on:click</a>

                <!-- 缩写 -->
                <a @click="doSomething">@click</a>

                <!-- 动态参数的缩写 (2.6.0+) -->
                <a @[event]="doSomething"> @[event] </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./template2.ts">

</script>

<style scoped>
    @import "./template2.css";
</style>