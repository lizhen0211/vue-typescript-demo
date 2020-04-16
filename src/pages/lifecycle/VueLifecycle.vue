<template>
    <div>
        <div>生命周期</div>
        <div>默认绑定值：{{defaultVal}}</div>
        <button v-on:click="updateVal">更新dom节点</button>
        <div>点击后请观察是否执行了“beforeUpdate”和“updated”方法</div>
    </div>
</template>

<script lang="ts" src="./vuelifecycle.ts">

</script>

<style scoped>
    @import "./vuelifecycle.css";
</style>