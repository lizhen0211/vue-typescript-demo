<template>
    <div id="app">
        <keep-alive :include="getIncludes()">
            <router-view></router-view>
        </keep-alive>

    </div>
</template>
<style lang="css">
    @import "../public/css/index.css";
</style>
<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import store from "@/store/store";

    @Component
    export default class App extends Vue {
        constructor() {
            super();
        }

        public getIncludes(): Array<string> {
            console.log("App.vue getKeepalives:"+store.getters.getKeepalives);
            return store.getters.getKeepalives;
        }

    }

</script>
