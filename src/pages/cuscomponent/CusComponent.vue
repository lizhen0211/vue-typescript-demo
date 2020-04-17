<template>
    <div>
        <div class="thispage">自定义组件</div>
        <hello-panel titleText="我是父组件传进来的字符串"></hello-panel>
        <div class="thispage">我是本页的内容</div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Hellopanel from "@/components/hello/HelloPanel.vue";

    @Component({
        components: {'hello-panel': Hellopanel}
    })
    export default class CusComponent extends Vue {
    }
</script>

<style scoped>
    @import "./cuscomponent.css";
</style>