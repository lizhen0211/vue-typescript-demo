<template>
    <div class="container">
        <div ref="scroller" class="scroller-bswrapper">
            <div class="scroller-content">
                <slot></slot>
                <div class="scroller-footer-wrapper">
                    <div v-if="isShowLoading">
                        <span class="pullup-txt">Loading...</span>
                    </div>
                    <div v-if="isLoadFinish">
                        <span class="pullup-txt">noting to load</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./pullup-scroller.ts">

</script>

<style scoped>
    @import "./pull-scroller.css";
</style>