<template>
    <div class="container">
        <div ref="pullupscroll" class="pullup-scroll-bswrapper">
            <div class="pullup-scroll-content">
                <ul>
                    <li v-for="item in this.items" class="pullup-item">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./pullup-load.ts">

</script>

<style scoped>
    @import "./pullup-load.css";
</style>