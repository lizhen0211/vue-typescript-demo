<template>
    <div>
        <div class="title">基础例子</div>
        <div class="content">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
            <p v-on:click="modifyMessageValue">请点击</p>
            <p>修改message值，依赖message的计算属性也会自动修改</p>
        </div>
        <div class="title">计算属性缓存 vs 方法</div>
        <div class="content">
           <p>你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：</p>
            <p>Reversed message: "{{ reversedMessageMethod() }}"</p>
            <p>now "{{now}}"</p>
        </div>
        <div class="title">侦听器</div>
        <div class="content">
            使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，
            并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
        </div>
    </div>
</template>

<script lang="ts" src="./computed.ts">

</script>

<style scoped>
    @import "./Computed.css";
</style>