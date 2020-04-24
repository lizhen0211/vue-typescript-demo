<template>
    <div class="pullup">
        <div ref="scroller" class="pullup-bswrapper">
            <div class="pullup-scroller">
                <ul class="pullup-list">
                    <li v-for="i in data" :key="i" class="pullup-list-item">
                        {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}
                    </li>
                </ul>
<!--                <div class="pullup-wrapper">-->
<!--                    <div v-if="!isPullUpLoad" class="before-trigger">-->
<!--                        <span class="pullup-txt">Pull up and load more</span>-->
<!--                    </div>-->
<!--                    <div v-else class="after-trigger">-->
<!--                        <span class="pullup-txt">Loading...</span>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./pullup-load.ts">

</script>

<style scoped>
    @import "pullup-load.css";
</style>