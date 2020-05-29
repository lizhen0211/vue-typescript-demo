<template>
    <div>
        <div>other js bridge</div>
        <div class="without-callback-div" v-on:click="onWithoutCallbackClick">js call native without callback</div>
        <div class="with-callback-div" v-on:click="onWithCallbackClick">js call native with callback</div>
    </div>

</template>

<script lang="ts" src="./other-jsbridge.ts">

</script>

<style scoped>
    @import "./OtherJsBridge.css";
</style>