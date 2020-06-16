<template>
    <div class="category-container">
        <div ref="categoryscroller" class="category-scroller-wrapper">
            <div class="category-list-div">
                <div ref="topdiv" class="top-div"></div>
                <dl v-for="(item,index) in data">
                    <dt class="category-title" v-bind:ref="item.title" v-bind:id="item.title">{{item.title}}</dt>
                    <dd class="category-item" v-bind:ref="item.title+index" v-bind:id="item.title+index"
                        v-for="(val,index) in item.values">{{val}}
                    </dd>
                </dl>
            </div>
        </div>
        <div class="navigator-div">
            <div class="navigator-wrapper">
                <span v-bind:class="index==currentIndex?'navigator-span-select':'navigator-span'"
                      v-bind:ref="'nav-'+item.title"
                      v-for="(item,index) in data"
                      v-on:click="onNavicatorClick(index,$event)"
                      v-on:touchstart="onNavigatorTouchStart(index,$event)"
                      v-on:touchmove.stop.prevent="onNavigatorTouchMove(index,$event)"
                      v-on:touchend="onNavigatorTouchEnd(index,$event)">{{item.title}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./brand-choose.ts">

</script>

<style scoped lang="less">
    @import "./BrandChoose.less";
</style>