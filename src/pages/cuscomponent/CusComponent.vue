<template>
    <div>
        <div class="thispage">我是本页的内容</div>
        <hello-panel v-bind:titleText=title v-bind:items=listItem></hello-panel>
        <div class="thispage">我是本页的内容</div>
    </div>
</template>

<script lang="ts" src="./cuscomponent.ts">

</script>

<style scoped>
    @import "./cuscomponent.css";
</style>