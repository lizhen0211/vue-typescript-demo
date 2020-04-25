<template>
    <div class="container">
        <PullUpScroller ref="pullupscroller" @pullingUpHandler="pullingUpHandler()">
            <ul>
                <li v-for="item in this.items" class="pullup-item">{{item}}</li>
            </ul>
        </PullUpScroller>
    </div>
</template>

<script lang="ts" src="./use-pullscroller.ts">

</script>

<style scoped>
    @import "./user-pullscroller.css";
</style>