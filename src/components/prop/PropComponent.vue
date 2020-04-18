<template>
    <div>
        <div class="baseType">{{propString}}</div>
        <div class="baseType">{{propNum}}</div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in list" v-on:click="onListItemClick(item)">{{item}}</li>
            </ul>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script lang="ts" src="./prop-component.ts">

</script>

<style scoped>
    @import "./prop-component.css";
</style>