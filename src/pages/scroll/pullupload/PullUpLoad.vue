<template>
    <div class="container">
        <div ref="pullupscroll" class="pullup-scroll-bswrapper">
            <div class="pullup-scroll-content">
                <ul>
                    <li v-for="item in this.items" class="pullup-item">{{item}}</li>
                </ul>
                <div class="pullup-bottom-wrapper">
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

<script lang="ts" src="./pullup-load.ts">

</script>

<style scoped>
    @import "./pullup-load.css";
</style>