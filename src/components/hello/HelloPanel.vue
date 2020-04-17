<template>
    <div>
        <div class="title">{{title}}</div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in list" v-on:click="onListItemClick(item)">{{item}}</li>
            </ul>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script lang="ts" src="./hellopanel.ts">

</script>

<style scoped>
    @import "./hellopanel.css";
</style>