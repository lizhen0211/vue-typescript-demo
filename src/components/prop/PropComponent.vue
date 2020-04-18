<template>
    <div>
        <div class="baseType">{{propString}}</div>
        <div class="baseType">{{propNum}}</div>
        <div class="baseType">{{propBool}}</div>
        <div class="array">
            <ul>
                <li v-for="(item,index) in propArray" v-on:click="onListItemClick(item)">{{item}}</li>
            </ul>
        </div>
        <div class="baseType">{{'propModel.name:::'+propModel.name}}</div>
        <div class="object">
            <ul>
                <li v-for="(item,index) in propModel.data" v-on:click="onListItemClick(item)">
                    {{'propModel.dataItem:::'+item}}
                </li>
            </ul>
        </div>
        <div class="baseType">{{defaultField}}</div>
        <div class="baseType">{{requiredField}}</div>
        <div class="baseType">{{'给默认对象的prop：'+defaultObject.name+':'+defaultObject.age}}</div>
        <div class="baseType">{{'自定义验证函数字段：'+cusValidatorFunField}}</div>
    </div>
</template>

<script lang="ts" src="./prop-component.ts">

</script>

<style scoped>
    @import "./prop-component.css";
</style>